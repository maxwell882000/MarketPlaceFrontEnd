<template>
  <div @click="show = !show" class="d-flex  text-link justify-content-between">
    <h6>{{ title }}</h6>
    <span>
      <b-icon :icon="show ? 'chevron-up' : 'chevron-down'"/>
    </span>
  </div>
  <div v-if="show">
    <slot></slot>
  </div>
  <hr>
</template>
<script>

export default {
  props: ['title', 'collapse'],
  data() {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>