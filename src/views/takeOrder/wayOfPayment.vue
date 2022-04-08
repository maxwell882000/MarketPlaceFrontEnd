<template>
  <section class="container mb-4">
    <back-button title="Назад в оформление"></back-button>
    <h4>Способ оплаты</h4>
    <h6 v-show="credits.length">Тарифы рассрочки</h6>
    <b-row class="">
      <b-col cols="8">
        <b-form-group v-show="credits.length" name="radio-options1" id="installment_number" class="mb-3"
                      v-slot="{ ariaDescribedby }">
          <way-of-payment-item :key="'way_of_payment_' + item.id" v-for="item in credits"
                               :title="item.name"
                               name="installment"
                               @change="setInstallment(item)"
                               :desc="item.helper_text"
                               :aria-describedby="ariaDescribedby">
          </way-of-payment-item>
        </b-form-group>
        <h6>Оплата сразу</h6>
        <b-form-group name="radio-options2" id="way_of_payment" v-slot="{ariaDescribedByPrice}">
          <way-of-payment-item title="Картой Uzcard или HUMO"
                               name="installment"
                               @change="setCard()"
                               desc="Без комиссии, мгновенная оплата"
                               :aria-describedby="ariaDescribedByPrice"></way-of-payment-item>
          <way-of-payment-item title="Наличными по факту доставки"
                               name="installment"
                               @change="setCash()"
                               desc="Без процентов"
                               :aria-describedby="ariaDescribedByPrice">

            <div class="mt-2 d-flex align-items-center">
              <info width="20" height="20" style="fill: var(--blue)"></info>
              <span class="text-xs text-gray ml-1">Данным методом нельзя оплатить рассрочку</span>
            </div>
          </way-of-payment-item>
        </b-form-group>
      </b-col>
      <b-col cols="4">
        <way-of-payment-price></way-of-payment-price>
      </b-col>
    </b-row>

  </section>
</template>
<script setup>
import BackButton from "@/components/helper/button/backButton";
import WayOfPaymentItem from "@/components/backet/wayOfPayment/wayOfPaymentItem";
import Info from "@/components/icons/info";

import {useStore} from "vuex";
import {computed} from "vue";
import WayOfPaymentPrice from "@/components/backet/wayOfPayment/wayOfPaymentPrice";

const store = useStore();
const credits = computed(() => store.getters["wayOfPaymentModule/credits"]);
const getCredits = () => store.dispatch('wayOfPaymentModule/getWayOfPayment');
const setInstallment = (credit) => store.commit("wayOfPaymentModule/setChosenCreditsInstallment", credit);
const setCash = () => store.commit("wayOfPaymentModule/setChosenCreditCash", {});
const setCard = () => store.commit("wayOfPaymentModule/setChosenCreditCard", {});
getCredits();

</script>