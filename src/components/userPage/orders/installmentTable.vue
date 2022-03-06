<template>
  <section class="extended-content-container">
    <table class="w-100">
      <tr class="table-installment table-gray">
        <td>28 Июн 2021</td>
        <td>150 000</td>
        <td>
          Оплачено!
        </td>
      </tr>
      <tr class="table-installment ">
        <td>28 Июн 2021</td>
        <td>150 000</td>
        <td>
          <ButtonBlue class="button m-0" title="Оплатить"></ButtonBlue>
        </td>
      </tr>
      <tr class="table-installment table-gray">
        <td>28 Июн 2021</td>
        <td>150 000</td>
        <td>Оплачено!</td>
      </tr>
    </table>
  </section>
  <hr>
</template>

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
<script>
import ButtonBlue from "@/components/helper/button/buttonBlue";

export default {
  components: {ButtonBlue},

}
</script>