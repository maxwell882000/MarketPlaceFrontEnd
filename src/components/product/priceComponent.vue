<template>
  <p class="old-price">
    <small>{{ priceOld }} сум</small>
  </p>
  <h5 class="price">
    {{ priceNew }} сум <small class="sale-percent">-{{ discount }}%</small>
  </h5>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      product: "productModule/product",
    }),
    priceOld() {
      return this.product.price;
    },
    priceNew() {
      return this.product.real_price;
    },
    discount() {
      return this.product.discount;
    }
  }
}
</script>
<style scoped lang="scss">
.price {
  font-weight: 600;
  padding-bottom: 20px;
  border-bottom: 1px solid #f2f2f2;

  .sale-percent {
    padding: 2px 10px;
    font-weight: 400;
    background-color: var(--red);
    border-radius: 20px;
    color: white;
    font-size: 12px;
  }

}
</style>