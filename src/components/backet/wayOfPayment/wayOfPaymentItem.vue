<template>
  <section class="section-container mb-3">
    <input-radio   v-bind="Object.assign({},$attrs, $props)">
      <div class="payment-font">
        <span class="pb-2 bold">{{ title }}</span>
        <br>
        <span class="text-gray">{{ desc }}</span>
        <slot></slot>
      </div>
    </input-radio>
  </section>
</template>
<script>
import InputRadio from "@/components/helper/input/inputRadio";

export default {
  inheritAttrs: false,
  props: ['title', 'desc'],
  components: {InputRadio},
}
</script>
<style scoped>
.payment-font {
  font-size: 14px;
  line-height: 17px;
}
.text-gray{
  font-size: 12px;
  line-height: 15px;
}
</style>