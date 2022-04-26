<template>
  <section class="extended-content-container">
    <table class="w-100">
      <tr
          :key="'table_installment_'+ item.id"
          v-for="(item, index) in purchase.payble.months"
          class="table-installment"
          :class="index % 2 === 0 && 'table-gray'">
        <td>{{ item.month }}</td>
        <td>{{ item.paid }}</td>
        <td>
          <ButtonBlue
              v-if="item.must_pay !== item.paid && item.id <= purchase.payble.next_paid_month"
              @click="payment({
                  purchase:purchase,
                  month: item
              })"
              class="button m-0" title="Оплатить"></ButtonBlue>
          <span v-else-if="item.must_pay === item.paid"> Оплачено!</span>
          <span v-else> Не оплачено</span>
        </td>
      </tr>
    </table>
  </section>
  <hr>
</template>
<script setup>
import ButtonBlue from "@/components/helper/button/buttonBlue";
import {defineProps} from "vue";
import {useStore} from "vuex";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  purchase: {
    type: Object,
    default() {
      return {}
    }
  }
});
const store = useStore();
const payment = (selectedMonth) => store.dispatch('purchaseModule/startPayment', selectedMonth);
</script>

<style lang="scss" scoped>
@import "../../../assets/style/order.scss";

.table-gray {
  background-color: var(--gray100);

}

.table-white {
  background-color: white;
}

.extended-content-container {
  width: calc(100% + #{$padding} * 2);
  margin-left: -$padding;
  padding: 0 !important;
}

.table-installment .button {
  margin: 0;
  padding: 0.2rem;
}

table tr td:nth-child(1) {
  padding-left: $paddingTable;
}

table tr td {
  font-size: 0.85rem;
}

table tr td:nth-child(3) {
  padding-right: $paddingTable;
  display: flex;
  align-items: end;
  justify-content: end;
  width: 100%;
}

table tr td:nth-child(3) * {
  width: 30%;
}

table tr td {
  padding-top: $paddingTable * 0.45;
  padding-bottom: $paddingTable * 0.45;
}
</style>
