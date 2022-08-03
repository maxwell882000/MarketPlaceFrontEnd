<template>
  <div class="bg-white p-mobile py-4">
    <pictures-part></pictures-part>
    <h5 class="my-3 text-md">{{ name }}</h5>
    <header-product></header-product>
    <price-component></price-component>
    <buy-button-mobile></buy-button-mobile>
  </div>
</template>

<script setup>
import PicturesPart from "@/components/product/PicturesPart";
import HeaderProduct from "@/components/product/headerProduct";
import PriceComponent from "@/components/product/priceComponent";
import BuyButtonMobile from "@/components/product/responsive/mobile/buyButtonMobile";
import {defineProps} from "vue";

defineProps({
  name: String
})
</script>

<style scoped>

</style>