<template>
  <div class="d-flex align-items-center">
    <div class="img-product p-2 mr-4">
      <img class="img-res" :src="order.product.image">
    </div>
    <div>
      <small v-show="order.product.discount_price" class="old-price d-block">
        {{ order.product.price }} сум
      </small>
      <h6>{{ order.quantity }} x {{ order.product.real_price }} сум</h6>
      <span class="w-50">{{ order.product.title }}</span>
    </div>
  </div>
<!--  <div class="my-2 d-flex justify-content-between">-->
<!--    <span>Ожидаемая доставка:</span>-->
<!--    <span>07.11 – 08.11</span>-->
<!--  </div>-->
<!--  <div class="prices d-flex justify-content-between">-->
<!--    <span>Стоимость доставки:</span>-->
<!--    <span>28 752 сум</span>-->
<!--  </div>-->
  <hr>
</template>
<script setup>
// eslint-disable-next-line no-undef,no-unused-vars
const props = defineProps({
  order: Object
});
</script>
