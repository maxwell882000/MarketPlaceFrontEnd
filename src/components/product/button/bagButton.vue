<template>
  <CartButton :basket="product.basket" :id="product.id"></CartButton>
</template>
<script setup>
import CartButton from "@/components/buttons/CartButton";
import {computed} from "vue";
import {useStore} from "vuex";

const store = useStore();
const product = computed(() => store.getters['productModule/product']);
</script>