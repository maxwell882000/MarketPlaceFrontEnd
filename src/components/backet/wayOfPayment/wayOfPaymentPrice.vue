<template>
  <section v-show="selected.type !== status.NOT_CHOSEN" class="section-container mb-3">
    <div class="d-flex  align-items-end">
      <div class="mr-4">
        <Info style="fill: var(--gray300)"></Info>
      </div>
      <span class="text-sm"> Выберите способ оплаты</span>
    </div>
    <ButtonGray title="Выберите способ оплаты"></ButtonGray>
  </section>

  <section v-show="selected.type !== status.NOT_CHOSEN" class="section-container">
    <div class="mb-3">
      <span class="mb-1 block">Первый взнос</span>
      <range-input-one
          :min="initialPriceWithPercents"
          :max="priceWithPercents"></range-input-one>
    </div>
    <div>
      <span class="mb-1 block">Срок рассрочки</span>
      <range-input-one-values
          @range-change="getCredit"
          :disable-input="true"
          :label-min="credits.min"
          :label-max="credits.max"
          :values="credits.values"
          :min="0"
          :max="credits.values.length"></range-input-one-values>
    </div>
    <div class="mt-3 section-container back-gray text-sm">
      <div class="d-flex justify-content-between mb-2">
        <span>Ежемесячный платеж:</span>
        <span class="text-500">
                150 000 сум
              </span>
      </div>
      <div class="d-flex justify-content-between mb-2">
        <span>Процент переплаты:</span>
        <span class="text-500">
                150 000 сум
              </span>
      </div>
      <div class="d-flex justify-content-between mb-2">
        <span>Сумма переплаты:</span>
        <span class="text-500">
                150 000 сум
              </span>
      </div>
      <div class="d-flex justify-content-between ">
        <span>Общая сумма оплаты:</span>
        <span class="text-500">
                  5 796 000 сум
              </span>
      </div>
    </div>
    <div class="text-xs mt-2">
      <em>Продолжная, вы соглашаетесь с
        <span class="text-blue">Условиями
              использования </span> и <span class="text-blue"> Политикой конфиденциальности</span> ByShop</em>
    </div>
    <ButtonBlue title="Подтвердить способ оплаты"></ButtonBlue>
  </section>
</template>
<script setup>
import ButtonBlue from "@/components/helper/button/buttonBlue";
import ButtonGray from "@/components/helper/button/buttonGray";
import RangeInputOne from "@/components/helper/input/range/rangeInputOne";
import {useStore} from "vuex";
import {computed, ref} from "vue";
import wayOfPaymentConstant from "@/constants/payment/wayOfPaymentConstant";
import Info from "@/components/icons/info";
import RangeInputOneValues from "@/components/helper/input/range/rangeInputOneValues";

const store = useStore();
const status = wayOfPaymentConstant;
const selected = computed(() => store.getters['wayOfPaymentModule/chosenCredit']);
const credits = computed(() => store.getters['wayOfPaymentModule/getMonth']);
const price = ref(store.getters['prepareBasketModule/calculatePrice']('real_price'));
const percent = ref(0);
const priceWithPercents = computed(() => {
  console.log(`PERCENT ${percent.value}`);
  console.log(`PRICE ${price.value}`);
  const percentPrice = percent.value * price.value;
  const result = percentPrice + price.value;
  console.log(result);
  return result;
});
const initialPriceWithPercents = computed(() => {
  console.log("INITIAL PRICE");
  console.log(selected.value);
  console.log(price.value);
  const result = price.value * (selected.value.initial_percent ?? 0) / 100;
  console.log(result);
  return result;
});

function getCredit(index) {
  if (index) {
    console.log(`CREDIT GET `);
    console.log(selected.value.credits[index - 1]);
    price.value = price.value + price.value * selected.value.credits[index - 1].percent / 100;
  }
}

</script>