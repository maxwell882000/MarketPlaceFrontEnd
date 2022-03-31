<template>
  <b-row>
    <filtration-side></filtration-side>
    <b-col cols="9">
      <slot></slot>
      <loader waiting="product_wrapper_load">
        <product-wrapper></product-wrapper>
      </loader>
    </b-col>
  </b-row>

</template>
<script>
import FiltrationSide from "@/components/filter/filteration/filtrationSide";
import ProductWrapper from "@/components/shared/productWrapper";
import Loader from "@/components/loading/loader";

export default {
  components: {
    Loader,
    ProductWrapper, FiltrationSide
  },
}
</script>