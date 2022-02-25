<template>
  <div class="border">
    <div class="inputContainer">
      <input :value="modelValue"
             @input="$emit('update:modelValue', $event.target.value)"
             v-bind="$attrs" class="input">
      <label :for="$attrs['id']" class="label">{{ $attrs['placeholder'] }}</label>
      <span class="prefix-items">
        <slot name="prefix"></slot>
      </span>
    </div>
  </div>

</template>
<script>
export default {
  inheritAttrs: false,
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>

<style scoped lang="scss">
@use "sass:math";
$inputHeight: 45px;
$lineHeight: 18px;
$center: math.div($inputHeight,2) - math.div($lineHeight,2);
.label {
  position: absolute;
  top: $center;
  left: 7.5px;
  background-color: white;
  color: var(--gray200);
  font-size: 16px;
  line-height: $lineHeight;
  transition: 0.5s;
  z-index: 0;
}

.prefix-items {
  position: absolute;
  top: $center - 0.5;
  width: 10%;
  right: 5px;
  cursor: pointer;
  line-height: $lineHeight;
}

.border {
  border: 1px solid var(--gray100);
  border-radius: 7px;
  margin-top: var(--marinTop);
}

.inputContainer {
  position: relative;
  height: $inputHeight;
  width: 100%;
}

.input {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  border: none;
  font-weight: 500;
  padding: 0 10px;
  font-size: 15px;
  line-height: $lineHeight;
  outline: none;
  background: none;
  z-index: 1;
}

.input:focus + .label {
  top: -7px;
  left: 3px;
  z-index: 10;
  font-size: 12px;
  font-weight: normal;
  line-height: 18px;
  color: var(--gray200);
}

.input:not(:placeholder-shown) + .label {
  top: -7px;
  left: 3px;
  z-index: 10;
  font-size: 12px;
  font-weight: normal;
  line-height: $lineHeight;
  color: var(--gray200);
}

::placeholder {
  color: transparent;
}
</style>