<template>
  <section class="container">
    <back-button title="Назад в корзину"></back-button>
    <h4>Оформление заказа</h4>
    <b-row>
      <b-col cols="9">
        <section class="section-container d-flex align-items-center mb-3">
          <info style="fill: var(--green)"></info>
          <span
              class="ml-2 text-500 text-sm">Внимание, мы разделили заказ, потому что товары будут отправлены с разных складов</span>
        </section>
        <delivery-prepare/>
        <way-of-payment-prepare/>
        <section class="text-sm section-container mb-3">
          <product-prepare-item/>
          <product-prepare-item/>
        </section>
      </b-col>
      <b-col cols="3">
        <section class="section-container">
          <h6 class="mb-3">Ваш заказ</h6>
          <div class="mb-3 text-sm">
            <div class="my-2 d-flex justify-content-between">
              <span> Товары (2)</span>
              <span class="text-500">2 898 000 сум</span>
            </div>
            <div class="my-2 d-flex justify-content-between">
              <span> Скидка на товары</span>
              <span class="text-500 text-red">2 898 000 сум</span>
            </div>
            <div class="my-2 d-flex justify-content-between">
              <span>Доставка</span>
              <span class="text-500">2 898 000 сум</span>
            </div>
          </div>

          <div class="d-flex justify-content-between bold">
            <span>Итого</span>
            <span>2 898 000 сум</span>
          </div>
          <router-link to="/cart/plasticCard">
            <ButtonBlue title="Оплатить"></ButtonBlue>
          </router-link>
          <div class="text-center mt-3">
            <div class="d-flex justify-content-center align-items-end text-sm">
              <div>
                <shields></shields>
              </div>
              <span>
                Безопасное оформление заказа
              </span>
            </div>
            <span class="text-xs text-gray">Нажимая «Оплатить» вы соглашаетесь с
              <span class="text-dark text-underline pointer"> уcловиями использования </span>и
              <span class="text-dark text-underline pointer">оплаты</span> сервиса ByShop</span>
          </div>
        </section>
      </b-col>
    </b-row>
    <div class="mt-3">
      <h4>Часто покупают с товарами из вашей корзины</h4>
      <sales-roll></sales-roll>
    </div>

  </section>
</template>
<script>
import BackButton from "@/components/helper/button/backButton";
import Info from "@/components/icons/info";
import DeliveryPrepare from "@/components/backet/deliveryPrepare";
import WayOfPaymentPrepare from "@/components/backet/wayOfPaymentPrepare";
import ProductPrepareItem from "@/components/backet/productPrepareItem";
import ButtonBlue from "@/components/helper/button/buttonBlue";
import Shields from "@/components/icons/shields";
import SalesRoll from "@/components/shared/SalesRoll";

export default {
  components: {
    SalesRoll,
    Shields, ButtonBlue, ProductPrepareItem, WayOfPaymentPrepare, DeliveryPrepare, Info, BackButton
  }
}
</script>
<style>
.img-product {
  height: 6rem;
  width: 6rem;
}
</style>