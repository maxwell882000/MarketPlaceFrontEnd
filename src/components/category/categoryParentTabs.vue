<template>
  <category-base-tabs :name="category.name" :link="`/category/sub/${category.slug}`">
    <div>
      <b-tabs nav-class="custom-tabs" pills>
        <b-tab @click="setCategory(item.slug)" v-for="item in category.children" :key="'category_of_sub' + item.slug"
               :title="item.name" :active="chosenCategory === item.slug">
        </b-tab>
      </b-tabs>
      <div>
        <loader :div-style="{height: '10vh'}" :waiting="'category_product' + chosenCategory">
          <SalesRoll :perPage="4" :products="currentProducts"></SalesRoll>
        </loader>
      </div>
    </div>
  </category-base-tabs>
</template>
<style>

h5 {
  padding: 0;
  margin: 0;
}
</style>
<script>
import SalesRoll from "@/components/shared/SalesRoll";
import {mapActions, mapGetters} from "vuex";
import Loader from "@/components/loading/loader";
import CategoryBaseTabs from "@/components/category/categoryBaseTabs";

export default {
  components: {CategoryBaseTabs, Loader, SalesRoll},
  props: {
    category: {
      type: Object,
      default() {
        return {
          "id": 4,
          "name": "Смартфоны и гаджеты",
          "slug": "sub",
          "children": [
            {
              "id": 5,
              "name": "This",
              "slug": "this"
            }
          ],
        }
      }
    }
  },
  data() {
    return {
      chosenCategory: this.category.children && this.category.children.length !== 0 && this.category.children[0].slug || ""
    }
  },
  computed: {
    currentProducts() {
      return this.product[this.chosenCategory] || [];
    },
    ...mapGetters({
      product: 'categoryModule/productInCategory',
    })
  },
  methods: {
    ...mapActions({
      getProductInCategory: "categoryModule/getProductCategory"
    }),
    setCategory(slug) {
      this.chosenCategory = slug;
      if (!(slug in this.product)) {
        this.getProductInCategory(slug);
      }
    }
  }
}
</script>