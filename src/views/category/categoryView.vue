<template>
  <section class="container my-4">
    <Badge></Badge>
    <b-row>
      <b-col cols="3" class="ml-r back-white border-st p-4">
        <category :column="12" :item="category"></category>
      </b-col>
      <b-col cols="9">
        <discount-roll class="mb-3"></discount-roll>
        <category-sub-tabs/>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import Badge from "@/components/shared/Badge";
import {mapGetters, mapMutations} from "vuex";
import Category from "@/components/header/category";
import DiscountRoll from "@/components/shared/discountRoll";
import CategorySubTabs from "@/components/category/categorySubTabs";

export default {
  data() {
    return {
      category: {}
    }
  },
  components: {CategorySubTabs, DiscountRoll, Category, Badge},
  computed: {
    ...mapGetters([
      'drop_bar'
    ])
  },
  watch: {
    drop_bar(value) {
      this.setCategory(value);
    }
  },
  methods: {
    ...mapMutations([
      'closeCategoryOpened'
    ]),
    setCategory(value) {
      let parent = value.filter(e => e.slug === this.$route.params.slug);
      console.log(parent);
      if (parent.length !== 0) {
        this.category = parent[0];
      }
    },
  },

  created() {
    this.closeCategoryOpened();
  },
  mounted() {
    this.setCategory(this.drop_bar);
  }
}
</script>