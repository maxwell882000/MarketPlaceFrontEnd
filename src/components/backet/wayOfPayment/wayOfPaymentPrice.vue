<template>
  <way-of-payment-price-accept
      v-show="selected.type === status.NOT_CHOSEN"
      title="Выберите способ оплаты"
      button-name="Выберите способ оплаты"
  >
    <div class="mr-4">
      <Info style="fill: var(--gray300)"></Info>
    </div>
  </way-of-payment-price-accept>

  <way-of-payment-price-accept
      v-show="selected.type === status.CARD"
      title="Картой Uzcard или HUMO"
      :is-entered="true"
      @accept="acceptCard"
      button-name="Подтвердить"
  >
  </way-of-payment-price-accept>

  <way-of-payment-price-accept
      v-show="selected.type === status.CASH"
      title="Наличными по факту доставки"
      :is-entered="true"
      @accept="acceptCash"
      button-name="Подтвердить"
  >
  </way-of-payment-price-accept>

  <!--  <section v-show="selected.type === status.CARD" class="section-container mb-3">-->
  <!--    <div class="d-flex  align-items-end">-->
  <!--      <div class="mr-4">-->
  <!--        <Info style="fill: var(&#45;&#45;gray300)"></Info>-->
  <!--      </div>-->
  <!--      <span class="text-sm"> Выберите способ оплаты</span>-->
  <!--    </div>-->
  <!--    <ButtonGray title="Выберите способ оплаты"></ButtonGray>-->
  <!--  </section>-->

  <section v-show="selected.type === status.INSTALLMENT" class="section-container">
    <div v-show="selected.initial_percent" class="mb-3">
      <span class="mb-1 block">Первый взнос</span>
      <range-input-one
          @update:modelValue="getInitialPayment"
          :model-value="parseFloat(initialPriceWithPercents.toFixed(2))"
          :min="initialPriceWithPercents"
          :max="priceWithPercents"
          :labelMin="initialPriceWithPercents.toFixed(2)"
          :labelMax="priceWithPercents.toFixed(2)"
      ></range-input-one>
    </div>
    <div>
      <span class="mb-1 block">Срок рассрочки</span>
      <range-input-one-values
          @range-change="setOverallPriceWithPercentage"
          :disable-input="true"
          :reset="resetIndex"
          :label-min="credits.min"
          :label-max="credits.max"
          :values="credits.values"
          :min="0"
          :max="credits.length"></range-input-one-values>
    </div>
    <div class="mt-3 section-container back-gray text-sm">
      <div class="d-flex justify-content-between mb-2">
        <span>Ежемесячный платеж:</span>
        <span class="text-500">
                {{ installment.eachMonthPayment.toFixed(2) }} сум
              </span>
      </div>
      <div class="d-flex justify-content-between mb-2">
        <span>Процент переплаты:</span>
        <span class="text-500 text-red">
             {{ installment.currentPercentage }}%
              </span>
      </div>
      <div class="d-flex justify-content-between mb-2">
        <span>Сумма переплаты:</span>
        <span class="text-500 text-red">
                {{ installment.percentageOverPayment.toFixed(2) }} сум
              </span>
      </div>
      <div class="d-flex justify-content-between ">
        <span>Общая сумма оплаты:</span>
        <span class="text-500">
                  {{ overallPrice.toFixed(2) }} сум
              </span>
      </div>
    </div>
    <div class="text-xs mt-2">
      <em>Продолжная, вы соглашаетесь с
        <span class="text-blue">Условиями
              использования </span> и <span class="text-blue"> Политикой конфиденциальности</span> ByShop</em>
    </div>
    <ButtonBlue @click="acceptInstallment" title="Подтвердить способ оплаты"></ButtonBlue>
  </section>
</template>
<script setup>
import ButtonBlue from "@/components/helper/button/buttonBlue";
import RangeInputOne from "@/components/helper/input/range/rangeInputOne";
import {useStore} from "vuex";
import {computed, reactive, ref, watch} from "vue";
import wayOfPaymentConstant from "@/constants/payment/wayOfPaymentConstant";
import Info from "@/components/icons/info";
import RangeInputOneValues from "@/components/helper/input/range/rangeInputOneValues";
import WayOfPaymentPriceAccept from "@/components/backet/wayOfPayment/wayOfPaymentPriceAccept";
import useSelectedWayOfPayment from "@/components/backet/wayOfPayment/setup/useSelectedWayOfPayment";

const store = useStore();
const status = wayOfPaymentConstant;
const selected = computed(() => store.getters['wayOfPaymentModule/chosenCredit']);
const credits = computed(() => store.getters['wayOfPaymentModule/getMonth']);
const overallPrice = ref(store.getters['prepareBasketModule/calculatePrice']('real_price'));
const fixed_price = overallPrice.value;
const percent = ref(0); // in selected credit we have percent which additionally must be applied to overallcost
const resetIndex = ref(true);// resetting slider when credit changed


const priceWithPercents = computed(() => {
  const percentPrice = percent.value * overallPrice.value;
  return percentPrice + overallPrice.value;
});

const initialPriceWithPercents = computed(() => {
  return overallPrice.value * (selected.value.initial_percent ?? 0) / 100;
});
const installment = reactive({
  currentPercentage: 0,
  percentageOverPayment: 0,
  eachMonthPayment: 0,
  initialPayment: initialPriceWithPercents.value,
  currentCredit: {}
});

function setOverallPriceWithPercentage(index) {
  if (selected.value.type === status.INSTALLMENT && (index === 0 || index) && selected.value.credits.length) {
    installment.currentCredit = selected.value.credits[index];
    installment.currentPercentage = installment.currentCredit.percent / 100;
    installment.percentageOverPayment = fixed_price * installment.currentPercentage;
    overallPrice.value = fixed_price + installment.percentageOverPayment;
    calculateEachMonthPayment();
  }
  resetSliderForPrice(index);
}

function resetSliderForPrice(index) { // when we change credit we have to return slider to initial value
  if (index === 0) {
    resetIndex.value = !resetIndex.value;
  }
}

watch(selected, () => { // when we change the credit we have to put appropriate prices
  setOverallPriceWithPercentage(0);       // give correct percent , so he is able to choose price
}, {immediate: true});

function calculateEachMonthPayment() {
  installment.eachMonthPayment = (overallPrice.value - installment.initialPayment) / installment.currentCredit.month;
}

// get initial payment if it is installment
function getInitialPayment(price) {
  installment.initialPayment = price;
  calculateEachMonthPayment();
}

// I have selected credits
const {
  acceptCash,
  acceptCard,
  acceptInstallment
} = useSelectedWayOfPayment(installment, overallPrice, selected);
</script>