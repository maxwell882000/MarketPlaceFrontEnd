<template>
  <Input :value="value" @input="input($event)" pattern="\w{3}-\d{3}"></Input>
</template>
<script>
import Input from "@/components/helper/input/input";

export default {
  components: {Input},
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      value: !this.modelValue || this.modelValue.length === 0 ? "+998" + this.modelValue : this.modelValue
    }
  },
  watch: {
    modelValue(){
      this.value = this.modelValue;
    }
  },
  methods: {
    input(event) {
      event.target.value = this.removeSpace(event.target.value).replace(/[^0-9+]/gi, '').slice(0, 13);
      if (event.target.value.length <= 3) {
        event.target.value = "+998";
      }
      this.$emit("update:modelValue", event.target.value);
    },
    removeSpace(value) {
      return value.replace(/\s+/g, '');
    }
  }
}
</script>