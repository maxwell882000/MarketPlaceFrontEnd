<template>
  <b-button @click="$router.back()" variant="link" class="decoration-none">
    <b-icon size="sm" icon="chevron-left"/>
    {{ title }}
  </b-button>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    click: {
      type: Function,
      default() {
        return this.$router.go(1);
      }
    }
  }
}
</script>
<style scoped>
 button {
   padding: 0;
   margin: 1rem 0;
 }
</style>