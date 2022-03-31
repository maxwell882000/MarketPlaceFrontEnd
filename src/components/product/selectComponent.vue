<template>
  <h6>{{ param.text }}</h6>
  <div class="d-flex flex-wrap">
    <button
        v-for="(option, optionIndex) in param.values"
        :key="'options_index_' + optionIndex+  '_value_ ' +  option"
        @click="selectedValue(option, optionIndex)"
        :class="[
                    'param-option',
                    selected === optionIndex && 'active'
                ]"
    >
      {{ option }}
    </button>
  </div>
  <div class="mb-4"></div>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

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
  data() {
    return {
      selected: -1
    }
  },
  computed: {
    ...mapGetters({
      order: "backetModule/getPreOrder",
      product: "productModule/product"
    })
  },
  methods: {
    ...mapActions({
      updateParams: "backetModule/updatePreOrder"
    }),
    ...mapMutations({
      setOrder: 'backetModule/setOrder'
    }),
    selectedValue(option, optionIndex) {
      this.selected = optionIndex // for activating selected classes;
      let value = {};
      value[this.index] = {
        key: this.param.text,
        value: option
      }
      this.setOrder({
        id: this.product.id,
        key: 'additional',
        value: value
      });
      this.updateParams({key: this.index, value: value[this.index]});
    }
  }
}
</script>
