<template>
  <div class="text-red text-sm ml-2">
    <span v-show="error"> {{ error }} </span>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
defineProps({
  error: String
})
</script>