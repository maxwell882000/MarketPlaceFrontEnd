<template>
  <section class="section-container mb-3">
    <input-radio   v-bind="Object.assign({},$attrs, $props)">
      <div class="text-sm">
        <span class="mb-2 block bold">{{ title }}</span>
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