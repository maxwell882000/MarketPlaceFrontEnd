<template>
  <template>
    <filter-category-first></filter-category-first>
  </template>
  <filter-category-second></filter-category-second>
  <filter-category-third></filter-category-third>
  <filter-category-fourth></filter-category-fourth>
</template>
<script>
import {mapGetters} from "vuex";
import FilterCategoryFirst from "@/components/filter/fliterCategory/filterCategoryFirst";
import FilterCategorySecond from "@/components/filter/fliterCategory/filterCategorySecond";
import FilterCategoryThird from "@/components/filter/fliterCategory/filterCategoryThird";
import FilterCategoryFourth from "@/components/filter/fliterCategory/filterCategoryFourth";

export default {
  components: {FilterCategoryFourth, FilterCategoryThird, FilterCategorySecond, FilterCategoryFirst},
  data() {
    return {
      category: Object
    }
  },
  computed: {
    ...mapGetters({
      drop_bar: "drop_bar",
      slug: ''
    })
  },
  watch: {
    drop_bar(val) {
      if (!this.slug) {

      }
    }
  }
}
</script>