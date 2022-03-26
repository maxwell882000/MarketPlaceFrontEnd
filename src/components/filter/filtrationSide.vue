<template>
  <b-col cols="3" class="ml-r back-white border-st p-4">
    <filter-item collapse="category" title="Категории">
    </filter-item>
    <filter-item collapse="price" title="Цена">
      <range-with-inputs @max-value="addMaxPrice"
                         @min-value="addMinPrice"
                         :min-constrain="10000"
                         :max-constrain="12000000"/>
    </filter-item>
    <filter-toggle name="В наличии"></filter-toggle>
    <filter-toggle name="Высокий рейтинг"></filter-toggle>
    <filter-toggle name="Со скидкой продавца"></filter-toggle>
    <filter-item collapse="manufacture" title="Производитель">
      <filter-select></filter-select>
    </filter-item>

    <filter-item collapse="color" title="Цвет">
      <filter-select></filter-select>
    </filter-item>
    <filter-item collapse="shop" title="Продавец">
      <filter-select></filter-select>
    </filter-item>
  </b-col>
</template>

<script>

import RangeWithInputs from "@/components/helper/input/range/rangeWithInputs";
import FilterItem from "@/components/filter/filterItem";
import FilterSelect from "@/components/filter/filterSelect";
import FilterToggle from "@/components/filter/filterToggle";
import {mapMutations} from "vuex";

export default {
  components: {
    FilterToggle,
    FilterSelect,
    FilterItem,
    RangeWithInputs,
  },
  methods: {
    ...mapMutations({
      addFilter: "productFilterByModule/addFilterBy"
    }),
    addMinPrice(price) {
      this.addFilter({key: "min_price", item: price});
    },
    addMaxPrice(price) {
      this.addFilter({key: "max_price", item: price});
    }
  }
}
</script>
<style>
.custom-border-input {
  margin-top: 10px !important;
}

.inputs {
  margin: 0 !important;
}
</style>