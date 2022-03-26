<template>
  <span>{{ first_category }}</span>
  <div class="ml-1">
    <filter-category-first :key="'filter_category_first_items' + item.slug"
                           v-for="item in category"
                           :category="item"></filter-category-first>
  </div>
</template>
<script>
import FilterCategoryFirst from "@/components/filter/fliterCategory/filterCategoryFirst";
export default {
  props: ['category', "first_category"],
  components: {FilterCategoryFirst}
}
</script>