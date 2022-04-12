<template>
  <div class="orders">
    <section>
      <order-header>
        <div class="rounded-st back-gray text-sm p-1 ">
          <span>Обрабатывается</span>
        </div>
      </order-header>
    </section>
    <hr>
    <section class="text-500">
      <b-row>
        <bought-product></bought-product>
        <bought-product></bought-product>
        <bought-product></bought-product>
        <bought-product></bought-product>
      </b-row>
    </section>
    <hr>
    <section class="text-500">
      <order-detail></order-detail>
    </section>
    <hr>
    <section class="w-40 text-500">
      <p class="bold mb-1">Состав заказа</p>
      <div class="key-value">
        <span>Товары - 2 шт.</span>
        <span>5 650 000 сум</span>
      </div>
      <div class="key-value ">
        <span>Товары - 2 шт.</span>
        <span>5 650 000 сум</span>
      </div>
      <div class="key-value">
        <span>Скидка</span>
        <span class="text-red">5 650 000 сум</span>
      </div>
      <div class="key-value py-2 last">
        <span class="bold">Итого к оплате</span>
        <span class="text-blue">5 650 000 сум</span>
      </div>
    </section>
    <section class="button-order">
      <ButtonBlue title="Повторить заказ" class="p-2 m-0"></ButtonBlue>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../assets/style/order.scss";
</style>
<script>
import BoughtProduct from "@/components/userPage/orders/boughtProduct";
import ButtonBlue from "@/components/helper/button/buttonBlue";
import OrderHeader from "@/components/userPage/orders/orderHeader";
import OrderDetail from "@/components/userPage/orders/orderDetail";

export default {
  components: {
    OrderDetail, OrderHeader, ButtonBlue, BoughtProduct
  }
}
</script>