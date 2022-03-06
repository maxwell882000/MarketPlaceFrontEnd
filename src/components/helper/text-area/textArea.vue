<template>
  <textarea
      rows="7"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="style border-st form-control"></textarea>
</template>
<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>
<style>
.style {
  border-color: var(--gray100);
}

. form-control:focus {
  border-color: white !important;
}
</style>