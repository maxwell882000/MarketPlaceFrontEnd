<template>
  <section class="container price-desc mb-3">
    <back-button class="mb-3" title="К описанию товара"></back-button>
    <section class="section-container d-flex justify-content-between">
      <div class="d-flex align-items-center">
        <div class="mr-4">
          <img src="">
        </div>
        <div>
          <span class="bold">{{ name }}</span>
          <header-product class="header-product"></header-product>
        </div>
      </div>
      <div class="d-flex align-items-center ">
        <div>
          <price-component></price-component>
        </div>
      </div>
      <div class="d-flex buttons align-items-center">
        <div class="w-100 mr-2">
          <buy-installment-button></buy-installment-button>
        </div>
        <buy-fast-button class="mr-2"></buy-fast-button>
        <bag-button></bag-button>
        <!--        <buy-fast-and-bag/>-->
      </div>
    </section>
    <slot></slot>
  </section>
</template>


<script>
import BackButton from "@/components/helper/button/backButton";
import HeaderProduct from "@/components/product/headerProduct";
import {mapGetters} from "vuex";
import PriceComponent from "@/components/product/priceComponent";
import BuyInstallmentButton from "@/components/product/button/buyInstallmentButton";
import BagButton from "@/components/product/button/bagButton";
import BuyFastButton from "@/components/product/button/buyFastButton";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: {
    BuyFastButton,
    BagButton,

    BuyInstallmentButton,
    PriceComponent,
    HeaderProduct,
    BackButton
  },
  computed: {
    ...mapGetters({
      name: "productModule/name",
    }),
  },

}
</script>
<style lang="scss">
.price-desc {

  .rating {
    margin-bottom: 0 !important;
  }

  .buttons {
    width: 35%;
  }

  .header-product {
    font-size: 0.8rem;
  }

  .price {
    padding-bottom: 0 !important;
    border-bottom: 0 !important;
  }
}

</style>