<template>
  <div class="d-flex flex-column category-item-roll
                             justify-content-center align-items-center">
    <div style="height: 3rem; width: 3rem">
      <img class="img-res" :src="item.icon" alt="category">
    </div>
    <div style="height: 1.8rem;overflow: hidden">
       <span class="text-sm text-center two-only-sentence">
            {{ item.name }}
          </span>
    </div>

  </div>

</template>

<script setup>
// eslint-disable-next-line no-undef
defineProps({
  item: Object
})
</script>

<style scoped>

</style>