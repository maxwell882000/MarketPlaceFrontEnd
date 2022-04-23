<template>
  <b-tabs class="custom-tabs order-user" pills>
    <b-tab title="Все">
      <order></order>
      <order></order>
      <order></order>
      <order></order>
    </b-tab>
    <b-tab title="Ожидают оплаты"></b-tab>
    <b-tab title="Рассрочка">
      <instalment></instalment>
    </b-tab>
    <b-tab title="Оплаченные"></b-tab>
    <b-tab title="Отправленные"></b-tab>
    <b-tab title="Завершенные"></b-tab>
  </b-tabs>
</template>
<script setup>
import Order from "@/components/userPage/orders/order";
import Instalment from "@/components/userPage/orders/instalment";


</script>