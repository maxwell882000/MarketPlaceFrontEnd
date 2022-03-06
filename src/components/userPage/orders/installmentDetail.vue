<template>
  <section class="text-500">
    <p class="bold mb-3">Состав заказа</p>
    <b-row>
      <bought-product></bought-product>
      <bought-product></bought-product>
      <bought-product></bought-product>
      <bought-product></bought-product>
      <bought-product></bought-product>
    </b-row>
    <div class="w-40 py-2">
      <div class="key-value">
        <span class="text-400">Срок рассрочки</span>
        <span>6 месяцев</span>
      </div>
      <div class="key-value">
        <span class="text-400">Оплачено</span>
        <span>350 000 сум</span>
      </div>
    </div>
  </section>
</template>
<style scoped>
@import "../../../assets/style/order.scss";

</style>
<script>
import BoughtProduct from "@/components/userPage/orders/boughtProduct";

export default {
  components: {BoughtProduct}
}
</script>