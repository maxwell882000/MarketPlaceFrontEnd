<template>
    <div style="margin-left: 0.4rem" class="text-red text-sm ">
      <span v-show="error" v-html="error"></span>
    </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
defineProps({
  error: String
})
</script>