<template>
  <div>
    <Input :style-border="{'border-color': error && 'var(--red)'}" v-bind="$attrs">
      <template #suffix>
        <slot name="suffix"></slot>
      </template>
      <template #prefix>
        <slot name="prefix"></slot>
      </template>
    </Input>
    <div class="text-red text-sm ml-2">
      <span v-show="error"> {{ error }} </span>
    </div>
  </div>

</template>
<script>
export default {
  inheritAttrs: false,
}
</script>

<script setup>
import Input from "@/components/helper/input/input";
// eslint-disable-next-line no-undef,no-unused-vars
const props = defineProps({
  error: String,
});
</script>
<style scoped>
.border-input {
  margin-top: 0px;
}

.button-blue {
  border: none;
  background-color: transparent;
}
</style>