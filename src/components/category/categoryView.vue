<template>
  <b-row>
    <b-col cols="3" class="ml-r bg-white border-st p-4">
      <category :column="12" :item="category"></category>
    </b-col>
    <b-col cols="9">
      <slot></slot>
    </b-col>
  </b-row>
</template>
<script>
import {mapGetters} from "vuex";
import Category from "@/components/header/category";
// import DiscountRoll from "@/components/shared/discountRoll";

export default {
  name: "categoryView",
  props: ['name'],
  data() {
    return {
      category: {},

    }
  },
  components: {Category},
  computed: {
    ...mapGetters([
      'drop_bar',
    ]),

  },
  watch: {
    drop_bar() {
      this.setCategory();
    }
  },
  methods: {

    setCategory() {
      let slug = this.$route.params.slug;
      let parent = this.drop_bar.filter(e => e.slug === slug
          || e.children.filter(ch => ch.slug === slug).length !== 0);
      if (parent.length !== 0) {
        this.category = parent[0];
        return;
      }
      this.category = [];
    },
  },

  created() {
    this.setCategory();
    this.$watch(
        () => this.$route.params.slug,
        () => {
          this.setCategory();
        },
        // fetch the data when the view is created and the data is
        // already being observed
        {immediate: true}
    )

  }
}
</script>