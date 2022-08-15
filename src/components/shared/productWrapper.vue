<template>
  <b-row class="items-list">
    <b-col :key="'product_keys_id' + item.id" v-for="item in products" cols="6"
           class="col-xl-3 col-lg-4 col-md-6 col-sm-6 p-mobile">
      <ItemCard class="m-auto " :product="item"/>
    </b-col>
  </b-row>
  <pagination-product v-show="checkPagination"></pagination-product>
</template>
<script>
import ItemCard from "@/components/shared/ItemCard";
import PaginationProduct from "@/components/helper/pagination/paginationProduct";
import {mapGetters} from "vuex";

export default {
  components: {PaginationProduct, ItemCard},
  computed: {
    ...mapGetters({
      products: "productFilterByModule/productData",
      checkPagination: "productFilterByModule/checkPagination"
    })
  }
}
</script>
<style lang="scss" scoped>
.col {
  margin-bottom: var(--marinTop);
}
</style>