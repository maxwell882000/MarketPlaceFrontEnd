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
import {mapGetters, mapMutations} from "vuex";

export default {
  props: {
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
    ...mapMutations({
      setOrder: 'backetModule/setOrder'
    }),
    selectedValue(option, optionIndex) {
      this.selected = optionIndex;
      this.setOrder({
        id: this.product.id,
        key: this.param.id,
        value: {
          key: this.param.text,
          value: option
        }
      })
      ;
    }
  }
}
</script>
