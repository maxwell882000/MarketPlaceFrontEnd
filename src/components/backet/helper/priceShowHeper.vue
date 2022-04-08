<template>
  <h6 class="mb-3">{{ title }}</h6>
  <div class="mb-3 text-sm">
    <div v-show="productPrice">
      <div class="my-2 d-flex justify-content-between">
        <span> Товары ({{ numberOfProducts }})</span>
        <span class="text-500">{{ productPrice && productPrice.toFixed(2) }} сум</span>
      </div>
    </div>
    <div v-show="discountPrice">
      <div class="my-2 d-flex justify-content-between">
        <span> Скидка на товары</span>
        <span class="text-500 text-red">{{discountPrice && discountPrice.toFixed(2) }} сум</span>
      </div>
    </div>
    <div v-show="deliveryPrice">
      <div class="my-2 d-flex justify-content-between">
        <span>Доставка</span>
        <span class="text-500">{{ deliveryPrice && deliveryPrice.toFixed(2) }} сум</span>
      </div>
    </div>

  </div>

  <div v-show="overallPrice" class="d-flex justify-content-between bold">
    <span>Итого</span>
    <span>{{ overallPrice && overallPrice.toFixed(2) }} сум</span>
  </div>
</template>
<script setup>
// eslint-disable-next-line no-undef
import {computed} from "vue";

// eslint-disable-next-line no-undef
const props = defineProps({
  title: String,
  productPrice: Number,
  productOldPrice: Number,
  deliveryPrice: Number,
  
  numberOfProducts: Number,
});
const discountPrice = computed(() => props.productOldPrice - props.productPrice);
const overallPrice = computed(() => props.productPrice + (props.deliveryPrice || 0));
</script>