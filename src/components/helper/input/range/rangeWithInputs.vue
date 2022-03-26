<template>
  <RangeInput @update:min="setMinValue" @update:max="setMaxValue" :minThreshold="minConstrain"
              :maxThreshold="maxConstrain" :min="parseInt(min) || 0"
              :max="parseInt(max) || 0">
  </RangeInput>
  <div class="d-flex inputs">
    <div style="flex: 1">
      <Input @input="e=> timeOut(()=>minValue(e))" type="number" v-model="min">
        <template #prefix>
          от
        </template>
      </Input>
    </div>
    <div class="p-2">
    </div>
    <div style="flex: 1">
      <Input @input="e=> timeOut(()=>maxValue(e))" v-model="max" type="number">
        <template #prefix>
          до
        </template>
      </Input>
    </div>
  </div>
</template>
<script>
import RangeInput from "@/components/helper/input/range/rangeInput";
import Input from "@/components/helper/input/input";

export default {
  props: {

    minConstrain: {
      type: Number,
      default: 0
    },
    maxConstrain: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      min: this.minConstrain,
      max: this.maxConstrain
    }
  },
  components: {
    Input,
    RangeInput
  },
  methods: {
    timeOut(s) {
      setTimeout(s, 4000);
    },
    setMinValue(e) {
      this.min = parseInt(e);
      let specific = this.min;
      if (this.min < this.minConstrain) {
        specific = this.minConstrain;
      } else if (this.min > this.max) {
        // specific = this.max;
      }
      this.min = specific;
      this.$emit("min-value", specific);
      return specific;
    },
    setMaxValue(e) {
      this.max = parseInt(e);
      let specific = this.max;
      if (this.max > this.maxConstrain) {
        specific = this.maxConstrain;
      } else if (this.max < this.min) {
        // specific = this.min;
      }
      this.max = specific;
      this.$emit("max-value", specific);
      return specific;
    },
    minValue(event) {
      event.target.value = this.setMinValue(this.min);
    },
    maxValue(event) {
      event.target.value = this.setMaxValue(this.max);
    }
  },
  emits: ['max-value', 'min-value']
}
</script>
<style>
.custom-border-input {
  margin-top: 10px !important;
}

.inputs {
  margin: 0 !important;
}
</style>