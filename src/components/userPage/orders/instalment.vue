<template>
  <div class="orders">
    <section>
      <order-header>
      </order-header>
    </section>
    <hr>
    <section>
      <b-row>
        <bought-product></bought-product>
        <bought-product></bought-product>
      </b-row>
    </section>
    <section class="back-gray border-st p-2">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <span class="text-center text-xs-l"><info></info> Чтобы получить рассрочку, вам нужно добавить поручителя</span>
        </div>
        <div>
          <ButtonVialet class="m-0 p-1 text-400" title="Добавить поручителя"></ButtonVialet>
        </div>
      </div>
    </section>

  </div>
  <div class="orders">
    <section>
      <order-header>
      </order-header>
    </section>
    <hr>
    <section>
      <installment-rest-payment></installment-rest-payment>
    </section>
    <installment-about></installment-about>
    <installment-table></installment-table>
    <installment-detail></installment-detail>
    <section class="button-order">
      <ButtonGray title="Оплатить всю рассрочку"></ButtonGray>
    </section>
  </div>
</template>
<style lang="scss" scoped>
@import "../../../assets/style/order.scss";

.about-installment {
  display: flex;
  justify-content: space-between;
  width: 50%;
}
</style>
<script>
import OrderHeader from "@/components/userPage/orders/orderHeader";
import InstallmentRestPayment from "@/components/userPage/orders/installmentRestPayment";
import InstallmentTable from "@/components/userPage/orders/installmentTable";
import InstallmentDetail from "@/components/userPage/orders/installmentDetail";
import ButtonGray from "@/components/helper/button/buttonGray";
import InstallmentAbout from "@/components/userPage/orders/installmentAbout";
import BoughtProduct from "@/components/userPage/orders/boughtProduct";
import Info from "@/components/icons/info";
import ButtonVialet from "@/components/helper/button/buttonVialet";

export default {
  components: {
    ButtonVialet,
    Info,
    BoughtProduct,
    InstallmentAbout, ButtonGray, InstallmentDetail, InstallmentTable, InstallmentRestPayment, OrderHeader
  }
}
</script>