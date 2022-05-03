<template>
  <div class="image-stock">
    <b-img class="img-res rounded-st" :src="item.des_image" alt=""/>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>
<style scoped>

.image-stock {
  height: 13rem;
  width: 20rem;
}
</style>