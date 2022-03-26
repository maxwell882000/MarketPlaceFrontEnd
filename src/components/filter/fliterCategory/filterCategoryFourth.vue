<template>
  <span>{{ firstCategory }}</span>
  <div class="ml-1">
    <filter-category-third :first_category="secondCategory" :second_category="thirdCategory" :category="[]"></filter-category-third>
  </div>
</template>
<script>
import FilterCategoryThird from "@/components/filter/fliterCategory/filterCategoryThird";

export default {
  props: ['firstCategory', "secondCategory", "thirdCategory"],
  components: {FilterCategoryThird}
}
</script>