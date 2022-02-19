<template>
  <button class="button-main">
    <span class="button-title">
     <slot></slot>
    </span>
  </button>
</template>
<script>

</script>
<style scoped>

.button-title {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
}
.button-main {
  width: 100%;
  margin-top: var(--marinTop);
  padding: 0.4rem;
  border: 0px;

  border-radius: var(--borderRadius);
}
</style>