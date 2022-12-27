<template>
  <router-link :to="goTo()" class="hover-cat block remove-link" :style="{
      cursor: 'pointer',
    '--back-color': category.back_color,
  '--color-text': category.color}">
    <slot></slot>
  </router-link>
</template>

<script setup>
import navigate from "@/function/navigate";
// eslint-disable-next-line no-undef
const props = defineProps({
  category: Object
});
const goTo = () => {
  return navigate(props.category.category);
}
</script>
<style>
.hover-cat:hover span {
  color: var(--color-text) !important;
}
</style>
<style scoped>
.hover-cat:hover {
  background-color: var(--back-color);
}


</style>