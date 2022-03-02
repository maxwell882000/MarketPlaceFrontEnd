<template>
  <v-wait :for="waiting">
    <template #waiting>
      <div class="d-flex justify-content-center align-items-center " style="height: 35vw">
        <b-spinner class=""></b-spinner>
      </div>
    </template>
    <slot></slot>
  </v-wait>
</template>
<script>
export default {
  props: ['waiting']
}
</script>