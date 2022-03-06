<template>
  <BaseRoll :perPage="perPage">
    <!--    <SplideSlide v-for="item in products" :key="slideKey + item.id ">-->
    <!--      <item-card :product="item"/>-->
    <!--    </SplideSlide>-->
    <SplideSlide>
      <item-card/>
    </SplideSlide>
    <SplideSlide>
      <item-card/>
    </SplideSlide>
    <SplideSlide>
      <item-card/>
    </SplideSlide>
    <SplideSlide>
      <item-card/>
    </SplideSlide>
    <SplideSlide>
      <item-card/>
    </SplideSlide>
    <SplideSlide>
      <item-card/>
    </SplideSlide>
  </BaseRoll>
</template>
<script>
import ItemCard from "../shared/ItemCard";
import BaseRoll from "@/components/shared/baseRoll";

export default {
  props: {
    slideKey: {
      type: String,
      default() {
        return "slider";
      }
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
        return 4;
      }
    }
  },
  components: {BaseRoll, ItemCard},
}
</script>