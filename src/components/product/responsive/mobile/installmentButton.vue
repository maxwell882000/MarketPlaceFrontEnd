<template>
  <div  v-if="isInstallment" >
    <ButtonVialet @click="buyImmediately" class="py-2">
      <p class="name">
        {{ installment.name }}
      </p>
      <p class="pricing">
        {{ priceFirstInstallment }} x {{ firstCredit.month }} месяцев
      </p>
    </ButtonVialet>
  </div>

</template>

<script setup>
import ButtonVialet from "@/components/helper/button/buttonVialet";
import useInstallmentProduct from "@/components/product/installment/setup/useInstallmentProduct";
import {useStore} from "vuex";
import usePay from "@/components/product/button/setup/usePay";
const store = useStore();
const getCredits = () => store.dispatch('wayOfPaymentModule/getWayOfPayment');
const {buyImmediately} = usePay("setShowPayment", getCredits);
const {installment, priceFirstInstallment, firstCredit, isInstallment} = useInstallmentProduct();

</script>

<style scoped>
p {
  all: unset;
  display: block;
  text-align: left;
  color: white;

}
.name {
  font-size: 0.8rem;
  font-weight: 400;
  opacity: 0.7;
}

</style>