<template>
  <!--  <template>-->
  <!--  </template>-->
  <filter-category-fourth v-if="($route.params.slug)" :category="category"></filter-category-fourth>
  <template v-else>
    <filter-category-first></filter-category-first>
  </template>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
// import FilterCategoryFirst from "@/components/filter/fliterCategory/filterCategoryFirst";
import FilterCategoryFourth from "@/components/filter/fliterCategory/filterCategoryFourth";
import FilterCategoryFirst from "@/components/filter/fliterCategory/filterCategoryFirst";
// this is for search by one category and changing
// but know it is not required
// first second and third
// so first for search we will click and get the result immediately
// second for category page last
export default {
  components: {FilterCategoryFirst, FilterCategoryFourth},
  data() {
    return {
      category: {
        name: "",
        children: {
          name: "",
          children: {
            name: "",
            children: []
          }
        }
      },
      watcher: null,
    }
  },
  computed: {
    ...mapGetters({
      drop_bar: "drop_bar",
    })
  },
  watch: {
    drop_bar() {
      this.setFromParams();
    }
  },
  methods: {
    ...mapActions({
      getFromSlug: "getThirdChild"
    }),
    async setFromParams(sluggable) {
      console.log("here change something");
      let slug = sluggable || this.$route.params.slug;
      let parent = await this.getFromSlug(slug);
      let category = this.category;
      if (parent[0]) {
        category.name = parent[0].name;
        parent[0].children.filter(sub => sub.children.filter(s => s.slug === slug).length !== 0).forEach(element => {
          category.children.name = element.name;
          element.children.filter(s => s.slug === slug).forEach(sub => {
            category.children.children.name = sub.name;
            category.children.children.children = [];
          })
        });
      }
      console.log(category);

    }
  },
  created() {
    this.watcher = this.$watch(
        () => this.$route.params.slug,
        (val) => {
          this.setFromParams(val);
        },
        {
          immediate: true
        }
    )
  },
  unmounted() {
    this.watcher();
  }
}
</script>