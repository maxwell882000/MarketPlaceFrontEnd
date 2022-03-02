<template>
  <Input v-bind="$attrs" :type="type()" :placeholder="$attrs.placeholder || 'Пароль'" style="width: 90%">
    <template #prefix>
      <b-icon
          @click="hide()" :icon="icon()"></b-icon>
      <i></i>
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
      return this.isHidden ? 'eye' : 'eye-slash';
    },
    type() {
      return this.isHidden ? "password" : "text";
    }
  }
}
</script>