<template>
  <div class="d-flex flex-wrap items-list">
    <ItemCard/>
    <ItemCard/>
    <ItemCard/>
    <ItemCard/>
    <ItemCard/>
    <ItemCard/>
  </div>
  <pagination-product></pagination-product>
</template>
<script>
import ItemCard from "@/components/shared/ItemCard";
import PaginationProduct from "@/components/helper/pagination/paginationProduct";

export default {
  components: {PaginationProduct, ItemCard}
}
</script>
<style scoped>
.items-list > * {
  margin: 0 10px 20px;
}
</style>