<template>
  <div class="relative block">
    <div @click="isShow = !isShow">
      <slot name="button"></slot>
    </div>
    <div>
      <div v-click-away="onClickAway" v-if="isShow" class="absolute section-container shadow-md"
           style="width: 15rem; z-index: 10;margin-top: 0.2rem; right: -0.4rem;">
        <h6>{{ label }}</h6>
        <hr>
        <slot name="items"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import InputRadio from "@/components/helper/input/inputRadio";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: {InputRadio},
  props: ['label'],
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    onClickAway() {
      this.isShow = false;
    }
  }
}
</script>