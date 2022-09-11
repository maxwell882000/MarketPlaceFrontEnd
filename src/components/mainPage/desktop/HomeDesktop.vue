<template>
  <loader waiting="main">
    <div class="container">
      <BannerAndItemDesktop/>
      <div class="home">
        <div class="mt-4 mb-2 ">
          <h5 class="text-sm-center">
            {{ $t("Купите, пока это выгодно") }} <span class="timer mt-sm-2 d-inline-block">{{ getTime }}</span>
          </h5>
        </div>
        <SalesRoll :per-page="6" slide-key="product_day" :products="product_of_day_rest"/>
        <section v-show="discount.items.length">
          <h5 class="mt-4 mb-2 text-sm-center">Акции и предложения</h5>
          <StocksTabs/>
        </section>
        <div class="pt-2"></div>
        <ShopList></ShopList>
        <div v-for="item in lenta" :key="'lenta_unique_'+ item.id">
          <section v-show="item.products.length">
            <show-all-text :link="'/products/lenta/' + item.id" :title="item.text">
            </show-all-text>
            <!--            <h5 class="text-sm-center mt-4 mb-2">{{  }}</h5>-->
            <div class="d-flex align-items-center">
              <router-link :to="'/products/lenta/' + item.id" v-if="item.left_image !== ''">
                <div
                    style="width: 30.571rem !important;height: 29.429rem; margin-right: 10px; ">
                  <img :src="item.left_image" class="img-res rounded-st">
                </div>
              </router-link>
              <div :class="item.left_image === '' ? 'take-all' : 'take-all-with-calc'">
                <SalesRoll :per-page="6"
                           slide-key="product_day"
                           :products="item.products"/>
              </div>
            </div>
            <!--                         :style="item.left_image ? {flex: 1} : {width: '100%'}"-->

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
import ShopList from "@/components/shop/desktop/shopList";
import ShowAllText from "@/components/helper/button/showAllText";

export default {
  components: {ShowAllText, ShopList, Loader, StocksTabs, SalesRoll, BannerAndItemDesktop},
  computed: {
    ...mapGetters('mainModule', [
      'getTime',
      'product_of_day',
      'product_of_day_rest',
      'discount',
      'lenta'
    ])
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
.take-all {
  width: 100% !important;
}

.take-all-with-calc {
  width: calc(100% - 30.571rem - 10px);
}

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
