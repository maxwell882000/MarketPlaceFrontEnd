<template>
  <button @click="buyImmediately" class="installment-buy w-100">
    Купить в рассрочку
  </button>
</template>
<script setup>
import usePay from "@/components/product/button/setup/usePay";

const {buyImmediately} = usePay("setShowPayment");
</script>
<style scoped lang="scss">
.installment-buy {
  background-color: #f71757 !important;
  color: white !important;

  &:hover {
    background-color: #d81e53 !important;
  }
}
</style>