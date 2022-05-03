<template>
  <filter-chosen></filter-chosen>
  <filter-item :is-show="true" collapse="category" title="Категории">
    <filter-category></filter-category>
  </filter-item>
  <filter-price></filter-price>
  <filter-toggle prefix="exists" name="В наличии"></filter-toggle>
  <filter-toggle prefix="rate_high" name="Высокий рейтинг"></filter-toggle>
  <filter-toggle prefix="discount_exists" name="Со скидкой продавца"></filter-toggle>
  <filter-manufacture></filter-manufacture>
  <filter-color></filter-color>
  <filter-shop></filter-shop>
</template>
<script setup>
import FilterItem from "@/components/filter/filteration/filterItem";
import FilterToggle from "@/components/filter/filteration/filterToggle";
import FilterCategory from "@/components/filter/filteration/fliterCategory/filterCategory";
import FilterChosen from "@/components/filter/filteration/filterChosen";
import FilterManufacture from "@/components/filter/filteration/filterSelect/filterBrand";
import FilterColor from "@/components/filter/filteration/filterSelect/filterColor";
import FilterShop from "@/components/filter/filteration/filterSelect/filterShop";
import FilterPrice from "@/components/filter/filteration/filterPrice";
</script>