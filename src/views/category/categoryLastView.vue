<template>
  <empty-search>
  </empty-search>
  <section class="container my-4">
    <Badge></Badge>
    <b-row>
      <filtration-side></filtration-side>
      <b-col cols="9">
        <product-wrapper></product-wrapper>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import Badge from "@/components/shared/Badge";
import FiltrationSide from "@/components/filter/filtrationSide";
import ProductWrapper from "@/components/shared/productWrapper";
import EmptySearch from "@/components/search/emptySearch";

export default {
  components: {EmptySearch, ProductWrapper, FiltrationSide, Badge}
}
</script>