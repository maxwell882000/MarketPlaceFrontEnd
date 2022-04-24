<template>
  <div class="orders">
    <section>
      <order-header :id-order="purchase.id">
        <div class="rounded-st text-sm p-1" :class="status.color">
          <span>{{ status.text }}</span>
        </div>
      </order-header>
    </section>
    <hr>
    <section class="text-500">
      <b-row>
        <bought-product
            :key="'gotted_product_purchase_' + item.id"
            v-for="item in purchase.purchase"
            :product="item">
        </bought-product>
      </b-row>
    </section>
    <hr>
    <section v-show="purchase.isDelivery" class="text-500">
      <order-detail
          :address="purchase.address ?? ''"
          :date-creation="purchase.payble.accepted_time ?? ''"
          :instructions="purchase.address_comment || ''"
          :id-toggle="'order_payment_id' + purchase.id">
      </order-detail>
      <hr>
    </section>
    <section class="w-40 text-500">
      <p class="bold mb-1">Состав заказа</p>
      <div class="key-value">
        <span>Товары - {{ purchase.allQuantity }} шт.</span>
        <span>{{ purchase.originalPrice }} сум</span>
      </div>
      <div v-show="discount">
        <div class="key-value">
          <span>Скидка</span>
          <span class="text-green">{{ discount }} сум</span>
        </div>
      </div>

      <div v-show="purchase.sumDelivery > 0">
        <div class="key-value">
          <span>Доставка</span>
          <span class="">{{ purchase.sumDelivery }} сум</span>
        </div>
      </div>

      <div class="key-value py-2 last">
        <span class="bold">Итого к оплате</span>
        <span class="text-blue">{{ purchase.payble.price }} сум</span>
      </div>
    </section>

    <section class="button-order d-flex">
      <ButtonBlue v-show="statusPayment.ACCEPTED !== purchase.payble.status"
                  title="Повторить заказ"
                  class="p-2 m-0">
      </ButtonBlue>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../assets/style/order.scss";
</style>
<script setup>
import BoughtProduct from "@/components/userPage/orders/boughtProduct";
import ButtonBlue from "@/components/helper/button/buttonBlue";
import OrderHeader from "@/components/userPage/orders/orderHeader";
// eslint-disable-next-line no-unused-vars
import OrderDetail from "@/components/userPage/orders/orderDetail";
import statusPaymentToFront from "@/constants/payment/statusPaymentToFront";
import statusPayment from "@/constants/payment/statusPayment";
import {computed, ref} from "vue";


// eslint-disable-next-line no-undef,no-unused-vars
const props = defineProps({
  purchase: {
    type: Object,
    default() {
      return {
        "id": 6999,
        "status": 2,
        "isDelivery": false,
        "allQuantity": 2,
        "originalPrice": 12,
        "purchase": [
          {
            "id": 16,
            "quantity": 1,
            "image": "http://127.0.0.1:8000/storage/card/image/funel.svg",
            "title": "asdfdf"
          }
        ],
        "productPrice": "122",
        "sumDelivery": 0,
        "payble": {
          "id": 10,
          "price": 122,
          "status": 0,
          "accepted_time": null
        }
      }
    }
  }
});
const discount = computed(() => props.purchase.originalPrice - props.purchase.productPrice);
const status = statusPaymentToFront[props.purchase.payble.status];
if (props.purchase.payble.status === statusPayment.DECLINED) {
  status.text = ref(props.purchase.payble.reason);
}
</script>