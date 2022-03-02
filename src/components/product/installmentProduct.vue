<template>
  <div class="price">
    <div class="payment-info">
      <p class="old-price">
        <small>{{ priceOld }} сум</small>
      </p>
      <h5 class="price">
        {{ priceNew }} сум <small class="sale-percent">-{{ discount }}%</small>
      </h5>
      <div v-if="installment && installment.credits.length !== 0">
        <div class="installment-plan row">
          <div v-for="(items, index) in installment.credits" :key="'monthes_' + index +'_unique_' + items.id"
               @click="setCredit(items)"
               class="col month" :class="[selected.id === items.id && 'active']">
            {{ items.month }} <br/>
            мес
          </div>
        </div>
        <div class="installment-pay pt-3 text-center">
          <p class="text-muted mb-1">{{ installment.name }}</p>
          <h5>{{ priceInstallment }} x {{ selected.month }} мес</h5>
        </div>
      </div>
      <div class="buttons">
        <div class="d-flex mb-2">
          <div class="w-100 buy-now">
            <button class="w-100">Купить сразу</button>
          </div>
          <div class="add2cart col-offset-1">
            <button class="w-100">
              <img src="@/assets/icons/bag.png" alt="bag"/>
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <button class="installment-buy w-100">
              Купить в рассрочку
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  methods: {
    ...mapMutations({
      setCredit: "productModule/setCredit"
    }),
  },
  computed: {
    ...mapGetters({
      product: "productModule/product",
      selected: "productModule/credit"
    }),
    priceInstallment() {
      let price = parseInt(this.priceNew.replace(/\s/g, ''));
      let calculate_percent = price / 100 * this.selected.percent;
      console.log(calculate_percent);
      console.log(price);
      let divided = (calculate_percent + price) / this.selected.month;
      console.log(divided);
      try {
        return divided.toFixed(0).split("")
            .reverse().join("").match(/.{1,3}/g).join(" ").split("").reverse().join("");
      } catch (e) {
        return 0;
      }

    },
    installment() {
      return this.product.installment;
    },
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
<style lang="scss" scoped>
.month {
  cursor: pointer;
}
</style>