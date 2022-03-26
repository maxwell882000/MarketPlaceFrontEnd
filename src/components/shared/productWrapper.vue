<template>
  <loader waiting="product_wrapper_load">
    <div class="d-flex flex-wrap justify-content-start items-list">
      <ItemCard :product="item" :key="'product_keys_id' + item.id" v-for="item in products"/>
    </div>
    <pagination-product></pagination-product>
  </loader>
</template>
<script>
import ItemCard from "@/components/shared/ItemCard";
import PaginationProduct from "@/components/helper/pagination/paginationProduct";
import {mapGetters} from "vuex";
import Loader from "@/components/loading/loader";

export default {
  components: {Loader, PaginationProduct, ItemCard},
  computed: {
    ...mapGetters({
      products: "productFilterByModule/productData"
    })
  }
}
</script>
<style scoped>
.items-list > * {
  margin: 0 10px 20px;
}
</style>