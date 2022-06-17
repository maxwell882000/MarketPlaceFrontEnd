<template>
  <button @click="buyImmediately" class="installment-buy w-100">
    Купить в рассрочку
  </button>
</template>
<script setup>
import usePay from "@/components/product/button/setup/usePay";
import {useStore} from "vuex";

const store = useStore();
const getCredits = () => store.dispatch('wayOfPaymentModule/getWayOfPayment');
const {buyImmediately} = usePay("setShowPayment", getCredits);

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