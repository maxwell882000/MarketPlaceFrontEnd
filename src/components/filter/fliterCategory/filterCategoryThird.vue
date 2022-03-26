<template>
  <span>{{ first_category }}</span>
  <div class="ml-1">
    <filter-category-second :first_category="second_category" :category="category"></filter-category-second>
  </div>
</template>
<script>
import FilterCategorySecond from "@/components/filter/fliterCategory/filterCategorySecond";

export default {
  props: ['first_category', 'second_category', 'category'],
  components: {FilterCategorySecond}
}
</script>