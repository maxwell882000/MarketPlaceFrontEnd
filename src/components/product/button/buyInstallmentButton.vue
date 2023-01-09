<template>
  <button v-if="isInstallment" @click="fixClicking" class="installment-buy w-100">
    {{ $t("Купить в рассрочку") }}
  </button>
</template>
<script setup>
import usePay from "@/components/product/button/setup/usePay";
import {useStore} from "vuex";
import useInstallmentProduct from "@/components/product/installment/setup/useInstallmentProduct";
import {ref} from "vue";

const store = useStore();
const isClickable = ref(true);
const getCredits = () => store.dispatch('wayOfPaymentModule/getWayOfPayment');
const {buyImmediately} = usePay("setShowPayment", getCredits);
const {isInstallment} = useInstallmentProduct();

function fixClicking() {
  if (isClickable.value) {
    buyImmediately();
    isClickable.value = false;
  }
}
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