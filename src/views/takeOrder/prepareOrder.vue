<template>
  <section class="container">
    <back-button title="Назад в корзину"></back-button>
    <h4>Оформление заказа</h4>
    <b-row>
      <b-col cols="9">
        <div v-show="deliveryCost.different_shop">
          <div class="section-container d-flex align-items-center mb-3">
            <Info style="fill: var(--green)"></Info>
            <span
                class="ml-2 text-500 text-sm">Внимание, мы разделили заказ, потому что товары будут отправлены с разных складов</span>
          </div>
        </div>
        <delivery-prepare/>
        <way-of-payment-prepare/>
        <section class="text-sm section-container mb-3">
          <product-prepare-item :key="'prepare_order_'+ item[0]" :order="item[1]" v-for="item in orders"/>
        </section>
      </b-col>
      <b-col cols="3">
        <section class="section-container">
          <loader :div-style="{height: '10vh'}" waiting="delivery_price_loaded">
            <price-already-calculated
                title="Ваш заказ"
                :delivery-price="deliveryCost.price"
                :over-payment-price="wayOfPayment.over_payment"
            >
            </price-already-calculated>
            <router-link :to="canBePaid ? routerPath: ''">
              <ButtonForm @submit="purchaseOrders" :is-entered="canBePaid" title="Оплатить"></ButtonForm>
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
          </loader>
        </section>
      </b-col>
    </b-row>
    <div class="mt-3">
      <h4>Часто покупают с товарами из вашей корзины</h4>
      <sales-roll></sales-roll>
    </div>

  </section>
</template>
<script setup>
import BackButton from "@/components/helper/button/backButton";
// import Info from "@/components/icons/info";
import DeliveryPrepare from "@/components/backet/deliveryPrepare";
import WayOfPaymentPrepare from "@/components/backet/wayOfPaymentPrepare";
import ProductPrepareItem from "@/components/backet/productPrepareItem";
import Shields from "@/components/icons/shields";
import SalesRoll from "@/components/shared/SalesRoll";
import PriceAlreadyCalculated from "@/components/backet/helper/priceAlreadyCalculated";
import Loader from "@/components/loading/loader";
import {computed, ref} from "vue";
import {useStore} from "vuex";
import Info from "@/components/icons/info";
import deliveryStatusConstant from "@/constants/delivery/deliveryStatusConstant";
import wayOfPaymentConstant from "@/constants/payment/wayOfPaymentConstant";
import ButtonForm from "@/components/helper/button/buttonForm";
import agreementAndPolicies from "@/constants/basket/agreementAndPolicies";

const store = useStore();
const deliveryCost = computed(() => store.getters['registrationOrderModule/deliveryCost']);
const orders = computed(() => Object.entries(store.getters['prepareBasketModule/selectedOrders']));
const wayOfPayment = computed(() => store.getters['registrationOrderModule/wayOfPayment']);
const currentStatus = computed(() => store.getters['deliveryInfoModule/status']);
const getCard = () => store.dispatch('plasticCardModule/getCards');
const openAgreement = () => store.commit("registrationOrderModule/setPolicies", agreementAndPolicies.CHOOSING);
const status = deliveryStatusConstant;
const canBePaid = computed(() =>
    currentStatus.value !== status.NOT_CHOSEN
    && wayOfPayment.value.type !== wayOfPaymentConstant.NOT_CHOSEN);
const routerPath = ref("/cart/plasticCard");

function purchaseOrders() {
  if (wayOfPayment.value.type === wayOfPaymentConstant.CASH) {
    routerPath.value = "";
    openAgreement();
  }

}

getCard();// dispatching beforehand
</script>
<style>
.img-product {
  height: 6rem;
  width: 6rem;
}
</style>