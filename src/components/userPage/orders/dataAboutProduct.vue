<template>
  <b-col cols="4" class="py-1">
    <div class="d-flex justify-content-start align-items-start">
      <div class="pr-1">
        <slot></slot>
      </div>
      <div class="text-height">
        <span class="header"> {{ header }}</span>
        <span class="data">{{ data }}</span>
      </div>
    </div>
  </b-col>

</template>
<script>
export default {
  props: ['data', 'header']
}
</script>
<style scoped>
br{
  margin:0 ;
  padding: 0;
}
.header {
  font-size: 0.8rem;
  color: var(--gray300);
}
.data {
  display: block;
  font-size: 0.7rem;
  font-weight: 500;
}
</style>