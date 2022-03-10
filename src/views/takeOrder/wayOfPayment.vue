<template>
  <section class="container mb-4">
    <back-button title="Назад в оформление"></back-button>
    <h4>Способ оплаты</h4>
    <h6>Тарифы рассрочки</h6>

    <b-row class="">
      <b-col cols="8">
        <b-form-group v-model="second" name="radio-options1" id="installment_number" class="mb-3"
                      v-slot="{ ariaDescribedby }">
          <way-of-payment-item title="Без переплаты"
                               name="installment"
                               desc="Рассрочка без процентов"
                               :aria-describedby="ariaDescribedby"></way-of-payment-item>
          <way-of-payment-item title="До 12 месяцев"
                               name="installment"
                               desc="Больше месяцев рассрочки"
                               :aria-describedby="ariaDescribedby"></way-of-payment-item>
          <way-of-payment-item title="Без первого взноса"
                               name="installment"
                               desc="Самый гибкий тариф"
                               :aria-describedby="ariaDescribedby"></way-of-payment-item>
        </b-form-group>
        <h6>Оплата сразу</h6>
        <b-form-group v-model="first" name="radio-options2" id="way_of_payment" v-slot="{ariaDescribedByPrice}">
          <way-of-payment-item title="Картой Uzcard или HUMO"
                               name="payment"
                               desc="Без комиссии, мгновенная оплата"
                               :aria-describedby="ariaDescribedByPrice"></way-of-payment-item>
          <way-of-payment-item title="Наличными по факту доставки"
                               name="payment"
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
        <section class="section-container mb-3">
          <div class="d-flex  align-items-end">
            <div class="mr-4">
              <info style="fill: var(--gray300)"></info>
            </div>
            <span class="text-sm"> Выберите способ оплаты</span>
          </div>
          <ButtonGray title="Выберите способ оплаты"></ButtonGray>
        </section>

        <section class="section-container">
          <div class="mb-3">
            <span class="mb-1 block">Первый взнос</span>
            <range-input-one></range-input-one>
          </div>
          <div>
            <span class="mb-1 block">Срок рассрочки</span>
            <range-input-one :min="1" :max="6"></range-input-one>
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
              использования </span> и <span class="text-blue"> Политикой конфиденциальности</span>  ByShop</em>
          </div>
          <ButtonBlue title="Подтвердить способ оплаты"></ButtonBlue>
        </section>
      </b-col>
    </b-row>

  </section>
</template>
<script>
import BackButton from "@/components/helper/button/backButton";
import WayOfPaymentItem from "@/components/backet/wayOfPaymentItem";
import Info from "@/components/icons/info";
import ButtonBlue from "@/components/helper/button/buttonBlue";
import ButtonGray from "@/components/helper/button/buttonGray";
import RangeInputOne from "@/components/helper/input/range/rangeInputOne";

export default {
  components: {RangeInputOne, ButtonGray, ButtonBlue, Info, WayOfPaymentItem, BackButton},
  data() {
    return {
      first: "",
      second: ""
    }
  }
}
</script>