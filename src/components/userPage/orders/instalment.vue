<template>
  <div v-if="!purchase">
      ERROR HAPPENED
  </div>
  <div v-else-if="purchase.status >= statusPayment.REQUIRED_SURETY" class="orders">
    <section>
      <order-header :id-order="purchase.id">
        <div class="rounded-st text-sm p-1" :class="status.color">
          <span>{{ status.text }}</span>
        </div>
      </order-header>
    </section>
    <hr>
    <section>
      <b-row>
        <bought-product :key="'bought_product_required_surety_'+ item.id"
                        :product="item"
                        v-for="item in purchase.purchase">
        </bought-product>
      </b-row>
    </section>
    <section class="back-gray rounded-st p-2">
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
  <div v-else class="orders">
    <section>
      <order-header :id-order="purchase.id">
        <div class="rounded-st text-sm p-1" :class="status.color">
          <span>{{ status.text }}</span>
        </div>
      </order-header>
    </section>
    <hr>
    <section>
      <installment-rest-payment :purchase="purchase"></installment-rest-payment>
    </section>
    <installment-about :purchase="purchase"></installment-about>
    <installment-table :purchase="purchase"></installment-table>
    <installment-detail :purchase="purchase"></installment-detail>
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
<script setup>
import OrderHeader from "@/components/userPage/orders/orderHeader";
import InstallmentRestPayment from "@/components/userPage/orders/installmentRestPayment";
import InstallmentTable from "@/components/userPage/orders/installmentTable";
import InstallmentDetail from "@/components/userPage/orders/installmentDetail";
import ButtonGray from "@/components/helper/button/buttonGray";
import InstallmentAbout from "@/components/userPage/orders/installmentAbout";
import BoughtProduct from "@/components/userPage/orders/boughtProduct";
import Info from "@/components/icons/info";
import ButtonVialet from "@/components/helper/button/buttonVialet";
import statusPaymentToFront from "@/constants/payment/statusPaymentToFront";
import statusPayment from "@/constants/payment/statusPayment";
import {ref,defineProps} from "vue";

const props = defineProps({
  purchase: {
    type: Object,
  }
});
let status;
if (props.purchase) {
  status = statusPaymentToFront[props.purchase.payble.status >= statusPayment.REQUIRED_SURETY ?
      statusPayment.REQUIRED_SURETY : props.purchase.payble.status];
  if (props.purchase.payble.status === statusPayment.DECLINED) {
    console.log("")
    console.log(props.purchase.payble.reason);
    status.text = ref(props.purchase.payble.reason);
  }
} else
  status = {}

</script>