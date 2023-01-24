<template>
  <h6>{{ param.text }}</h6>
  <div :class="!isList(param.type) && 'd-flex flex-wrap'">
    <div v-for="(option, optionIndex) in param.values"
         :key="'options_index_' + optionIndex+  '_value_ ' +  option.id">
      <button
          @click="selectedValue(option)"
          v-if="!isList(param.type)"
          :class="[
                    'param-option',
                    selected === option.id && 'active'
                ]">
        {{ option.text }}
      </button>
      <ul v-else>
        <li> {{ option.text }}
        </li>
      </ul>
    </div>
  </div>
  <div class="mb-4"></div>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import productKeyType from "@/constants/product/productKeyType";

export default {
  props: {
    index: Number,
    param: {
      type: Object,
      default() {
        return {
          name: "Встроенная память, ГБ",
          options: ["32", "64", "128"],
        }
      }
    }
  },

  computed: {
    ...mapGetters({
      order: "backetModule/getPreOrder",
      additional: "backetModule/additional",
      product: "productModule/product",
      selectedOrder: "backetModule/chosenAdditional"
    }),
    selected() {
      return this.selectedOrder(this.product.id, this.index)
    }
  },
  methods: {
    ...mapActions({
      updateParams: "backetModule/updatePreOrder"
    }),
    ...mapMutations({
      setOrder: 'backetModule/setOrder',
      setPriceChange: "productModule/setPriceChange"
    }),
    isList(type) {
      return type === productKeyType.TYPE_LIST
    },
    selectedValue(option) {
      let value = this.additional(this.product.id);
      const array = this.param.values.filter(e => e.id === this.selected);

      const oldPrice = array.length ? array[0].price : 0;
      const newPrice = option.price;
      option.oldPrice = oldPrice;
      console.log(oldPrice);
      console.log(newPrice);
      value[this.index] = {
        key: this.param.text,
        value: option
      }
      this.setOrder({
        id: this.product.id,
        key: 'additional',
        value: value
      });
      this.setPriceChange({oldPrice, newPrice});
      this.updateParams({additional: {key: this.index, value: value[this.index]}});
    }
  }
}
</script>
