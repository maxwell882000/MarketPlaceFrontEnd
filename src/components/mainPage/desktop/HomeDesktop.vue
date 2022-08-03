<template>
  <loader waiting="main">
    <div class="container">
      <BannerAndItemDesktop/>
      <div class="home">
        <div class="mt-4 mb-2 ">
          <h5 class="text-sm-center">
            Купите, пока это выгодно <span class="timer mt-sm-2 d-inline-block">{{ getTime }}</span>
          </h5>
        </div>
        <SalesRoll :per-page="6" slide-key="product_day" :products="products"/>
        <section v-show="discount.items.length">
          <h5 class="mt-4 mb-2 text-sm-center">Акции и предложения</h5>
          <StocksTabs/>
        </section>
        <div class="pt-2"></div>
        <div v-for="item in lenta" :key="'lenta_unique_'+ item.id">
          <section v-show="item.products.length">
            <h5 class="text-sm-center mt-4 mb-2">{{ item.text }}</h5>
            <SalesRoll :per-page="6" slide-key="product_day" :products="item.products"/>
          </section>
        </div>
      </div>
    </div>
  </loader>

</template>


<script>
import "@splidejs/splide/dist/css/splide.min.css";
import SalesRoll from "@/components/shared/SalesRoll";
import StocksTabs from "@/components/mainPage/StocksTabs";
import {mapActions, mapGetters} from "vuex";
import Loader from "@/components/loading/loader";
import BannerAndItemDesktop from "@/components/mainPage/desktop/BannerAndItemDesktop";

export default {
  components: {Loader, StocksTabs, SalesRoll, BannerAndItemDesktop},
  data() {
    return {
      products: []
    };
  },
  computed: {
    ...mapGetters('mainModule', [
      'getTime',
      'product_of_day',
      'discount',
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
    font-size: 1.8rem;
    padding: 1rem 15px;
    border-radius: 30px 8px 30px 8px;
  }
}
</style>
