<template>
  <b-row>
    <filtration-side></filtration-side>
    <b-col cols="9">
      <product-wrapper></product-wrapper>
    </b-col>
  </b-row>
</template>
<script>
import FiltrationSide from "@/components/filter/filtrationSide";
import ProductWrapper from "@/components/shared/productWrapper";
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  components: {
    ProductWrapper, FiltrationSide
  },
  computed: {
    ...mapGetters({
      category: "categoryModule/category"
    })
  },
  methods: {
    ...mapMutations({
      clean: "productFilterByModule/clean",
      addFilter: "productFilterByModule/addFilterBy",
    }),
    ...mapActions({
      getProducts: "productFilterByModule/getProducts"
    })
  },
  created() {
    this.clean();
    this.addFilter({key: "category_slug", item: this.$route.params.slug});
    this.getProducts(1);
  },
  beforeUnmount() {
    this.clean();
  }
}
</script>