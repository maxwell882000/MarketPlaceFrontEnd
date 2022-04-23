<template>
  <InputValidation v-bind="Object.assign({},$attrs, $props )" :type="type()"
                   :placeholder="$attrs.placeholder || 'Пароль'">
    <template #suffix>
      <span class="px-2" style="cursor: pointer">
             <b-icon
                 @click="hide()" :icon="icon()"></b-icon>
      </span>
    </template>
  </InputValidation>
</template>
<script>
import InputValidation from "@/components/helper/input/inputValidation";

export default {
  components: {InputValidation},
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
  },

}
</script>