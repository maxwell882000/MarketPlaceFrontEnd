<template>
  <section class="text-500">
    <p class="bold mb-3">Состав заказа</p>
    <b-row>
      <bought-product :key="'bought_product_'+ item.id"
                      :product="item"
                      v-for="item in purchase.purchase">
      </bought-product>
    </b-row>
    <section v-show="purchase.isDelivery" class="text-500">
      <order-detail
          :address="purchase.address ?? ''"
          :date-creation="purchase.payble.accepted_time ?? ''"
          :instructions="purchase.address_comment || ''"
          :id-toggle="'order_payment_id' + purchase.id">
      </order-detail>
      <hr>
    </section>
    <div class="w-40 py-2">
      <div class="key-value">
        <span class="text-400">Срок рассрочки</span>
        <span>{{ purchase.payble.number_month }} месяцев</span>
      </div>
      <div class="key-value">
        <span class="text-400">Оплачено</span>
        <span>{{ paid }} сум</span>
      </div>
      <div class="key-value">
        <span class="text-400">Общая оплата</span>
        <span>{{ purchase.payble.price }} сум</span>
      </div>
    </div>
  </section>
</template>
<style scoped>
@import "../../../assets/style/order.scss";

</style>
<script setup>
import BoughtProduct from "@/components/userPage/orders/boughtProduct";
import {computed, defineProps} from "vue";
import OrderDetail from "@/components/userPage/orders/orderDetail";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  purchase: {
    type: Object,
    default() {
      return {}
    }
  }
});
const paid = computed(() => parseInt(props.purchase.payble.already_paid) + parseInt(props.purchase.payble.initial_pay))
</script>