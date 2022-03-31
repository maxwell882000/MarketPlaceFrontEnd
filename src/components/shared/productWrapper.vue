<template>
  <div class="d-flex flex-wrap justify-content-start items-list">
    <ItemCard :product="item" :key="'product_keys_id' + item.id" v-for="item in products"/>
  </div>
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
<style scoped>
.items-list > * {
  margin: 0 10px 20px;
}
</style>