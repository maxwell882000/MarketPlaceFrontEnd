<template>
  <div v-show="price">
    <div class="my-2 d-flex justify-content-between">
      <span> {{ title }}</span>
      <span :class="'text-500 ' + color">{{ price && price.toFixed(2) }} сум</span>
    </div>
  </div>
</template>
<script setup>
// eslint-disable-next-line no-undef
defineProps({
  price: Number,
  title: String,
  color: {
    type: String,
    default: "text-red"
  }
});
</script>