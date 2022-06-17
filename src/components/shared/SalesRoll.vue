<template>
  <!--  <div ref="sizeDetermine">-->
  <!--    <Flicking ref="flicking" :options="{align:'prev',panelsPerView: numberOFItems}">-->
  <!--      <div v-for="item in products" :key="slideKey + item.id ">-->
  <!--        <div class="w-100 m-auto d-flex justify-content-center">-->
  <!--          <item-card :product="item"/>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </Flicking>-->
  <!--  </div>-->
  <div class="sales-roll">
    <BaseRoll :breakpoints="breakpoints" :perPage="perPage">
      <SplideSlide v-for="item in products" :key="slideKey + item.id ">
        <div class="w-100 m-auto d-lg-block d-sm-flex d-flex justify-content-center">
          <item-card :product="item"/>
        </div>
      </SplideSlide>
    </BaseRoll>
  </div>

</template>
<script setup>
import ItemCard from "../shared/ItemCard";

// eslint-disable-next-line no-undef
import BaseRoll from "@/components/shared/baseRoll";

// eslint-disable-next-line no-undef
defineProps({
  slideKey: {
    type: String,
    default() {
      return "slider";
    }
  },
  breakpoints: {
    type: Object
  },
  products: {
    type: Array,
    default() {
      return []
    }
  },
  perPage: {
    type: Number,
    default() {
      return 5;
    }
  }
});

</script>
<style lang="scss">
.sales-roll {
  .splide__track {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }


}

</style>