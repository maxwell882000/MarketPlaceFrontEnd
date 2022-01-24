<template>
  <div class="container">
    <BannerAndItem />
    <h5 class="mt-4 mb-3">Купите, пока это выгодно <span class="timer">07:48:10</span></h5>
    <SalesRoll />
    <h5 class="mt-4 mb-3">Акции и предложения</h5>
    <StocksTabs />
    <!-- Электроника -->
    <h5 class="mt-4 mb-3">Успей купить!</h5>
    <SalesRoll />
  </div>
</template>


<script>

import BannerAndItem from "../components/mainPage/BannerAndItem";
import '@splidejs/splide/dist/css/splide.min.css';
import SalesRoll from "../components/mainPage/SalesRoll";
import StocksTabs from "../components/mainPage/StocksTabs";
export default {
  components: {StocksTabs, SalesRoll, BannerAndItem},
  data() {
    return {};
  }
}
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
