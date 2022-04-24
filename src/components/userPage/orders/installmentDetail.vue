<template>
  <section class="text-500">
    <p class="bold mb-3">Состав заказа</p>
    <b-row>
      <bought-product :key="'bought_product_'+ item.id"
                      :product="item"
                      v-for="item in purchase.purchase">
      </bought-product>
    </b-row>
    <div class="w-40 py-2">
      <div class="key-value">
        <span class="text-400">Срок рассрочки</span>
        <span>{{ purchase.payble.number_month }} месяцев</span>
      </div>
      <div class="key-value">
        <span class="text-400">Оплачено</span>
        <span>{{ purchase.payble.already_paid }} сум</span>
      </div>
    </div>
  </section>
</template>
<style scoped>
@import "../../../assets/style/order.scss";

</style>
<script setup>
import BoughtProduct from "@/components/userPage/orders/boughtProduct";
import {defineProps} from "vue";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  purchase: {
    type: Object,
    default() {
      return {}
    }
  }
});
</script>