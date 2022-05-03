<template>
  <purchase-modal>
  </purchase-modal>
  <success-payment-modal></success-payment-modal>
  <error-payment-modal></error-payment-modal>
  <loader waiting="purchases_loaded">
    <b-tabs class="custom-tabs order-user" pills>
      <b-tab lazy active title="Все">
        <order-scroller key-field="all_purchases_" :items="purchases"></order-scroller>
      </b-tab>
      <b-tab lazy title="Ожидают модерации">
        <order-scroller key-field="all_waiting_" :items="waitingAnswers"></order-scroller>
      </b-tab>
      <b-tab lazy title="Ожидают оплаты">
        <order-scroller key-field="all_waiting_answer_" :items="waitingPurchase"></order-scroller>
      </b-tab>
      <b-tab lazy title="Рассрочка">
        <instalment :key="'all_installments_' + installment.id"
                    :purchase="installment" v-for="installment in installments"></instalment>
      </b-tab>
      <b-tab lazy title="Завершенные">
        <order-scroller key-field="all_finished_" :items="finishedPurchases"></order-scroller>
      </b-tab>
      <b-tab lazy title="Откланеные">
        <order-scroller key-field="all_declined_" :items="declinedPurchases"></order-scroller>
      </b-tab>
    </b-tabs>
  </loader>
  <!--  <loader waiting="purchases_loaded">-->
  <!--    <b-tabs class="custom-tabs order-user" pills>-->
  <!--      <b-tab lazy active title="Все">-->
  <!--        <div :key="'all_purchases_' + purchase.id" v-for="purchase in purchases">-->
  <!--          <order v-if="purchase.status !== payment.INSTALLMENT" :purchase="purchase"></order>-->
  <!--          <instalment v-else :purchase="purchase"></instalment>-->
  <!--        </div>-->
  <!--      </b-tab>-->
  <!--      <b-tab  lazy  title="Ожидают модерации">-->
  <!--        <div :key="'all_waiting_' + waiting.id" v-for="waiting in waitingAnswers">-->
  <!--          <order v-if="waiting.status !== payment.INSTALLMENT"-->
  <!--                 :purchase="waiting"></order>-->
  <!--          <instalment v-else :purchase="waiting"></instalment>-->
  <!--        </div>-->
  <!--      </b-tab>-->
  <!--      <b-tab lazy title="Ожидают оплаты">-->
  <!--        <div :key="'all_waiting_' + waiting.id" v-for="waiting in waitingPurchase">-->
  <!--          <order v-if="waiting.status !== payment.INSTALLMENT"-->
  <!--                 :purchase="waiting"></order>-->
  <!--          <instalment v-else :purchase="waiting"></instalment>-->
  <!--        </div>-->
  <!--      </b-tab>-->
  <!--      <b-tab lazy  title="Рассрочка">-->
  <!--        <instalment :key="'all_installments_' + installment.id"-->
  <!--                    :purchase="installment" v-for="installment in installments"></instalment>-->
  <!--      </b-tab>-->
  <!--      <b-tab lazy title="Завершенные">-->
  <!--        <div :key="'all_finished_' + purchase.id" v-for="purchase in finishedPurchases">-->
  <!--          <order :purchase="purchase" v-if="purchase.status !== payment.INSTALLMENT"></order>-->
  <!--          <instalment v-else :purchase="purchase"></instalment>-->
  <!--        </div>-->
  <!--      </b-tab>-->
  <!--      <b-tab lazy title="Откланеные">-->
  <!--        <div :key="'all_declined_' + purchase.id" v-for="purchase in declinedPurchases">-->
  <!--          <order :purchase="purchase" v-if="purchase.status !== payment.INSTALLMENT"></order>-->
  <!--          <instalment v-else :purchase="purchase"></instalment>-->
  <!--        </div>-->
  <!--      </b-tab>-->
  <!--    </b-tabs>-->
  <!--  </loader>-->

</template>
<script setup>
// import Order from "@/components/userPage/orders/order";
import Instalment from "@/components/userPage/orders/instalment";
import {useStore} from "vuex";
import {computed} from "vue";
// import wayOfPaymentConstant from "@/constants/payment/wayOfPaymentConstant";
import Loader from "@/components/loading/loader";
import ErrorPaymentModal from "@/components/userPage/orders/modal/errorPaymentModal";
import SuccessPaymentModal from "@/components/userPage/orders/modal/successPaymentModal";
import PurchaseModal from "@/components/userPage/orders/modal/purchaseModal";
import OrderScroller from "@/components/userPage/orders/orderScroller";

// const payment = wayOfPaymentConstant;
const store = useStore();
const purchases = computed(() => store.getters['purchaseModule/purchases']);
const installments = computed(() => store.getters['purchaseModule/onlyInstallment']);
const waitingAnswers = computed(() => store.getters['purchaseModule/waitingAnswer']);
const waitingPurchase = computed(() => store.getters['purchaseModule/waitingToPurchase']);
const finishedPurchases = computed(() => store.getters['purchaseModule/finishedPurchases']);
const declinedPurchases = computed(() => store.getters['purchaseModule/declinedPurchases']);

</script>