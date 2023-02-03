<template>
  <div class="d-flex" :class="isReverse && 'flex-row-reverse'">
    <category-square class="remove" :category="categories[0]"></category-square>
    <category-vertical class="bothRemove" :class="isReverse ? 'remove-right' : 'remove-left'" :category="categories[1]"
    ></category-vertical>
    <category-vertical
        :category="categories[2]"></category-vertical>
  </div>
</template>

<script setup>
import CategorySquare from "@/components/category/home/categorySquare";
import CategoryVertical from "@/components/category/home/categoryVertical";

// eslint-disable-next-line no-undef
defineProps({
  isReverse: Boolean,
  categories: Array,
});


</script>

<style scoped>
.bothRemove {
  margin-left: 1.429em;
  margin-right: 1.429em;
}

@media (max-width: 1399px) {
  .remove {
    display: none;
  }

  .remove-right {
    margin-right: 0 !important;
  }

  .remove-left {
    margin-left: 0 !important;
  }
}
</style>