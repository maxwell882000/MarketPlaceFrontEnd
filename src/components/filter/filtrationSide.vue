<template>
  <b-col cols="3" class="ml-r back-white border-st p-4">
    <filter-chosen></filter-chosen>
    <filter-item :is-show="true" collapse="category" title="Категории">
      <filter-category></filter-category>
    </filter-item>
    <filter-price></filter-price>
    <filter-toggle prefix="exists" name="В наличии"></filter-toggle>
    <filter-toggle prefix="rate_high" name="Высокий рейтинг"></filter-toggle>
    <filter-toggle prefix="discount_exists" name="Со скидкой продавца"></filter-toggle>
    <filter-manufacture></filter-manufacture>
    <filter-color></filter-color>
    <filter-shop></filter-shop>
  </b-col>
</template>

<script>

import RangeWithInputs from "@/components/helper/input/range/rangeWithInputs";
import FilterItem from "@/components/filter/filterItem";
import FilterToggle from "@/components/filter/filterToggle";
import {mapMutations} from "vuex";
import FilterCategory from "@/components/filter/fliterCategory/filterCategory";
import FilterChosen from "@/components/filter/filterChosen";
import FilterManufacture from "@/components/filter/filterSelect/filterBrand";
import FilterColor from "@/components/filter/filterSelect/filterColor";
import FilterShop from "@/components/filter/filterSelect/filterShop";
import FilterPrice from "@/components/filter/filterPrice";

export default {
  components: {
    FilterPrice,
    FilterShop,
    FilterColor,
    FilterManufacture,
    FilterChosen: FilterChosen,
    FilterCategory,
    FilterToggle,
    FilterItem,
    // eslint-disable-next-line vue/no-unused-components
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