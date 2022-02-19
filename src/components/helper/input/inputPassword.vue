<template>
  <Input v-bind="$attrs" :type="type()" placeholder="Пароль" style="width: 90%">
    <template #prefix>
      <i @click="hide()" :class="icon()" ></i>
    </template>
  </Input>
</template>
<script>
import Input from "@/components/helper/input/input";

export default {
  components: {Input},
  inheritAttrs: false,
  data() {
    return {
      isHidden: true,
    }
  },
  methods: {
    hide() {
      this.isHidden = !this.isHidden;
    },
    icon() {
      return this.isHidden ? 'bi bi-eye' : 'bi bi-eye-slash';
    },
    type() {
      return this.isHidden ? "password" : "text";
    }
  }
}
</script>