<template>
  <loader waiting="main">
    <div class="container">
      <BannerAndItem/>
      <h5 class="mt-4 mb-3">
        Купите, пока это выгодно <span class="timer">{{ getTime }}</span>
      </h5>
      <SalesRoll :per-page="5" slide-key="product_day" :products="products"/>
      <h5 class="mt-4 mb-3">Акции и предложения</h5>
      <StocksTabs/>
      <discount-roll></discount-roll>
      <div v-for="item in lenta" :key="'lenta_unique_'+ item.id">
        <h5 class="mt-4 mb-3">{{ item.text }}</h5>
        <SalesRoll :per-page="5" slide-key="product_day" :products="item.products"/>
      </div>
    </div>
  </loader>

</template>


<script>
import BannerAndItem from "../components/mainPage/BannerAndItem";
import "@splidejs/splide/dist/css/splide.min.css";
import SalesRoll from "@/components/shared/SalesRoll";
import StocksTabs from "@/components/mainPage/StocksTabs";
import {mapActions, mapGetters} from "vuex";
import Loader from "@/components/loading/loader";
import DiscountRoll from "@/components/shared/discountRoll";

export default {
  components: {DiscountRoll, Loader, StocksTabs, SalesRoll, BannerAndItem},
  data() {
    return {
      products: []
    };
  },
  computed: {
    ...mapGetters('mainModule', [
      'getTime',
      'product_of_day',
      'lenta'
    ])
  },
  watch: {
    product_of_day(newVal) {
      this.products = newVal.items.slice(1);
    }
  },
  methods: {
    ...mapActions([
      'mainModule/getMain',
      'mainModule/getLenta',
      'mainModule/countDownSecond',
    ]),
  },
  async created() {
    await this['mainModule/getMain']();
    this['mainModule/getLenta']();
  },
  mounted() {

  }
};
</script>

<style scoped lang="scss">
.container {
  padding: 24px 0;

  .timer {
    background-color: var(--red);
    color: white;
    font-size: 20px;
    padding: 4px 15px;
    border-radius: 30px 8px 30px 8px;
  }
}
</style>
