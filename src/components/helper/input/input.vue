<template>
  <div class="border-input custom-border-input">
    <div class="inputContainer">
      <div ref="prefix" class="prefix">
        <slot name="prefix"></slot>
      </div>
      <input ref="input" :value="modelValue"
             @input="$emit('update:modelValue', $event.target.value)"
             :style="style"
             v-bind="$attrs" class="input">
      <label :for="$attrs['id']" class="label">
        <span>
              {{ $attrs['placeholder'] }}
        </span>
      </label>
      <div ref="suffix" class="suffix-items">
        <slot name="suffix"></slot>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  inheritAttrs: false,

  props: {
    modelValue: {},
    widthSuffix: undefined,
    widthPrefix: undefined
  },
  data() {
    return {
      style: {}
    }
  },
  mounted() {
    this.style['margin-left'] = this.$refs.prefix.clientWidth + "px";
    let width;
    let prefixWidth = this.widthPrefix || this.$refs.prefix.clientWidth;
    let suffixWidth = this.widthSuffix || this.$refs.suffix.clientWidth;

    if ((width = (this.$refs.input.clientWidth - suffixWidth - prefixWidth)) > 0)
      this.style['width'] = width + "px";
  },
  emits: ['update:modelValue']
}
</script>

<style scoped lang="scss">
@use "sass:math";

$inputHeight: 45px;
$lineHeight: 18px;
$center: math.div($inputHeight,2) - math.div($lineHeight,2);
input[type="date"] {
  color: var(--dark);
}

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

.suffix-items {
  position: absolute;
  display: flex;
  align-items: center;
  height: 100%;
  right: 5px;
  line-height: $lineHeight;
}


.inputContainer {
  position: relative;
  display: flex;
  align-content: center;
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
  z-index: 1;
  font-size: 12px;
  font-weight: normal;
  line-height: 18px;
  color: var(--gray200);
}

.input:not(:placeholder-shown) + .label {
  top: -7px;
  left: 3px;
  z-index: 1;
  font-size: 12px;
  font-weight: normal;
  line-height: $lineHeight;
  color: var(--gray200);
}

::placeholder {
  color: transparent;
}

.prefix,
.suffix {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  left: 7.5px;
  background-color: white;
  color: var(--gray200);
  font-size: 16px;
  line-height: $lineHeight;
}

</style>