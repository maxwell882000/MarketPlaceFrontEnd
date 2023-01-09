<template>
  <SuccessModel
      :description="$t('Ваши данные успешно отправленны')"
      :button-title="$t('Продолжить')"
      :path-name="nextPath"
      success-show="successToBasket">
  </SuccessModel>
</template>
<script setup>
import SuccessModel from "@/components/verification/successModel";
import {useStore} from "vuex";
import {computed} from "vue";
import wayOfPaymentConstant from "@/constants/payment/wayOfPaymentConstant";

const store = useStore();

const nextPath = computed(() => {
  return store.getters['registrationOrderModule/wayOfPayment'].type === wayOfPaymentConstant.INSTALLMENT ? "plasticCard" : "basket"
})
</script>