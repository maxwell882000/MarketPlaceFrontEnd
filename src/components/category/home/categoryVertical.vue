<template>
  <cat-hover :category="category" class="category-vertical relative">
    <div style="padding: 1.714em 1.714em 0rem 1.714em;">
  <span style="
    font-weight: 600;
    color: var(--dark)">{{ category.category.name }} </span>
    </div>
    <div>
      <img :src="category.category.image"
           style="bottom: 0;
    right: 0;
    height: max-content;" class="absolute">
    </div>
  </cat-hover>
</template>

<script setup>
import CatHover from "@/components/category/home/catHover";
// eslint-disable-next-line no-undef
defineProps({
  category: Object
});

</script>

<style scoped>
.category-vertical {
  width: 11.429em;
  height: 18.571em;
  background-color: var(--gray900);
  border-radius: var(--borderRadius14);
}
</style>