<template>
  <price-show-heper :title="title"
                    :product-old-price="overallOldPrice"
                    :product-price="overallPrice"
                    :delivery-price="deliveryPrice"
                    :number-of-products="selectedLength"
  ></price-show-heper>
</template>
<script setup>
import PriceShowHeper from "@/components/backet/helper/priceShowHeper";
import usePrepareBasketPrice from "@/components/backet/helper/setup/usePrepareBasketPrice";
// eslint-disable-next-line no-undef,no-unused-vars
const props = defineProps({
  title: String,
  deliveryPrice: Number
});
const {overallOldPrice, overallPrice, selectedLength} = usePrepareBasketPrice();

</script>