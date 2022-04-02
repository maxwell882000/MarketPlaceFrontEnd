<template>
  <header-product>
    <section class="section-container mt-3 p-4">
      <div class="w-40 mt-4" :key="'characteristics_item_' + main.id" v-for="main in product.characteristics">
        <h6>{{main.header}}</h6>
        <table class="dotted-table text-dark">
          <tr v-for="(items, index) in main.values" :key="'char_'  + index">
            <th><span>{{ items.key }}</span></th>
            <th><span>{{ items.value }}</span></th>
          </tr>
        </table>
      </div>
    </section>
  </header-product>

</template>
<script>
import HeaderProduct from "@/components/product/header/headerProduct";
import {mapGetters} from "vuex";

export default {
  components: {HeaderProduct},
  computed: {
    ...mapGetters({
      product: 'productModule/product'
    }),
    firstChar() {
      return this.product.characteristics[0];
    },
  }
}
</script>