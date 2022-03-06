<template>
  <b-col cols="3" class="ml-r back-white border-st p-4">

    <filter-item collapse="price" title="Цена">
      <range-with-inputs :min-constrain="10000" :max-constrain="12000000"/>
    </filter-item>
    <filter-select/>
    <filter-toggle></filter-toggle>
  </b-col>
</template>

<script>

import RangeWithInputs from "@/components/helper/input/range/rangeWithInputs";
import FilterItem from "@/components/filter/filterItem";
import FilterSelect from "@/components/filter/filterSelect";
import FilterToggle from "@/components/filter/filterToggle";

export default {

  components: {
    FilterToggle,
    FilterSelect,
    FilterItem,
    RangeWithInputs,
  },

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