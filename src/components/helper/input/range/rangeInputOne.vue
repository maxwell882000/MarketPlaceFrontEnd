<template>
  <div style="position: relative">
    <Input v-model="value" type="number" style="position: absolute"/>
    <Slider v-bind="$props" :min="min" :max="max" style="position: relative; top: -4px;" v-model="value"/>
    <div class="triangle-right"></div>
  </div>
  <div class="d-flex text-gray text-sm justify-content-between">
    <span>от {{ min.toString() }}</span>
    <span>до {{ max.toString() }}</span>
  </div>
</template>

<script>
import Slider from '@vueform/slider'
import Input from "@/components/helper/input/input";

export default {
  props: {
    modelValue: {
      default: 0
    },
    min: {
      default: 0
    },
    max: {
      default: 100
    },

  },
  components: {
    Input,
    Slider,
  },
  watch: {
    value(newVal) {
      this.$emit('update:modelValue', newVal);
    },
    modelValue(){
      this.value = this.modelValue;
    }
  },
  data() {
    return {
      value: this.modelValue
    }
  }
}
</script>

<style src="@vueform/slider/themes/default.css">

</style>
<style scoped>
.border-input {
  margin-top: 0;
}
</style>
<style>

.slider-horizontal .slider-handle {
  --slider-height: 3px;
  z-index: -1;
}

.triangle-right {
  width: 0;
  height: 0;
  position: absolute;
  top: 42px;
  left: 0px;
  z-index: 2;
  border-top: 5px solid transparent;
  border-left: 8px solid white;
}

.slider-handle .slider-tooltip-top {
  display: none !important;
}

.slider-horizontal {
  height: 3px;
  border-radius: 40px;
}

.slider-handle {
  z-index: 100;
}

.slider-connect {
  background: var(--blue);
}

.slider-base {
  background-color: var(--gray100);
}
</style>