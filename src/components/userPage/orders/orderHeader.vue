<template>
  <div class="d-flex justify-content-between align-items-center">
    <div class="text-wrap">
      <h6 class="p-0 m-0"> Заказ № {{ idOrder }} </h6>
    </div>
    <div class="text-wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef,no-unused-vars
const props = defineProps({
  idOrder: Number
})
</script>