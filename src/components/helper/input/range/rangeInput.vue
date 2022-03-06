<template>
  <div class="content">
    <div id="my-slider" :se-min="minThreshold" :se-step="step" :se-min-value="min" :se-max-value="max"
         :se-max="maxThreshold" class="slider">
      <div class="slider-touch-left">
        <span></span>
      </div>
      <div class="slider-touch-right">
        <span></span>
      </div>
      <div class="slider-line">
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import ZbRangeSlider from './zbRangeSlider'

export default {
  props: {
    maxValue: {
      type: Number,
      default: 0,
    },
    minThreshold: {
      type: Number,
      default: 0
    },
    maxThreshold: {
      type: Number,
      default: 300
    },
    step: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    }
  },
  data: function () {
    return {
      instance: undefined
    }
  },
  mounted: function () {
    this.instance = new ZbRangeSlider('my-slider')
    this.instance.onChange = (min, max) => this.updateValues(min, max)
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    min(value) {
      this.instance.setMinValue(value);
    },
    max(value) {
      this.instance.setMaxValue(value);
    }
  },
  methods: {
    updateValues: function (min, max) {
      this.$emit('update:min', min)
      this.$emit('update:max', max)
    }
  }
}

</script>

<style>
.slider {
  display: block;
  position: relative;
  height: 36px;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.slider .slider-touch-left,
.slider .slider-touch-right {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  position: absolute;
  height: 36px;
  width: 36px;
  padding: 6px;
  z-index: 2;
}

.slider .slider-touch-left span,
.slider .slider-touch-right span {
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: white;
  border-radius: 50%;
  box-shadow: 0px 1px 5px rgba(24, 36, 67, 0.25);
}

.slider .slider-line {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  width: calc(100% - 36px);
  left: 18px;
  top: 16px;
  height: 4px;
  border-radius: 4px;
  background: var(--gray100);
  z-index: 0;
  overflow: hidden;
}

.slider .slider-line span {
  display: block;
  height: 100%;
  width: 0%;
  background: var(--blue);
}
</style>