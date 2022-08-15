<template>
  <div
      v-bind:style="{ 'background-image': 'url(' + shop.image + ')' }"
      class="thumbnail row align-items-end">
    <div class="col col-12 col-md-8 col-lg-5 col-sm-12">
      <div class="seller-cart">
        <img :src="shop.logo" class="logo p-3" alt=""/>
        <h6 class="mt-3 mb-1">{{ shop.name }}</h6>
        <div class="d-flex align-items-center justify-content-between">
          <div>
            <p class="mb-1">
              <small class="text-muted">
                <b-icon icon="geo-alt-fill" class="me-1"/>
                <span>{{ shop.address }}</span>
              </small>
            </p>
            <p class="mb-0">
              <!--                <stars rating="3"></stars>-->
              <!--                <span class="text-muted">{{ itemInfo.rating }} / 5</span>-->
            </p>
          </div>
          <!--            <button class="btn btn-light">-->
          <!--              <b-icon icon="share"/>-->
          <!--            </button>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
defineProps({
  shop: Object
})
</script>

<style scoped>

</style>