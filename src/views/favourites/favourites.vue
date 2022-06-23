<template>
  <loader waiting="favourite">
    <section class="container mb-3">
      <Badge :path="path" class="mb-3"></Badge>
      <empty-page
          v-if="!exists"
          button-text="На главную"
          desc="Жмите ♡ на странице товара и добавляйте сюда то, что нравится. И если цена на эти товары упадёт, мы вам напишем."
          link="/" image="SearchNotFound.png"
          title="Ещё не готовы к покупке?"></empty-page>
      <template v-else>
        <div class="mb-3"><h4 class="inline">Избранное</h4> <span v-show="count">{{ count }} товаров</span></div>
        <filter-with-products></filter-with-products>
      </template>
    </section>
  </loader>
</template>
<script>
import Badge from "@/components/shared/Badge";
import EmptyPage from "@/components/helper/empty/emptyPage";
import FilterWithProducts from "@/components/filter/component/filterWithProducts";
import useFilterWithComponent from "@/components/filter/setup/useFilterWithComponent";
import useFilterBy from "@/components/filter/setup/useFilterBy";
import {useStore} from "vuex";
import {computed} from "vue";
import Loader from "@/components/loading/loader";
import {useRouter} from "vue-router";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: {Loader, FilterWithProducts, EmptyPage, Badge},
  setup() {
    const store = useStore();
    const isAuthenticated = computed(() => store.getters['isAuthenticated']);
    if (!isAuthenticated.value) {
      const router = useRouter();
      router.push("/");
      store.commit("authWindow/setLogin");
      return {
        exists: "",
        path: [],
        count: 0,
      }
    } else {
      const getFilterForFavourite = () => store.dispatch("getFavourite");
      getFilterForFavourite();
      const exists = computed(() => store.getters['productFilterByModule/isProductExists']);
      const count = computed(() => store.getters['productFilterByModule/count'])
      const result = useFilterWithComponent(useFilterBy({key: 'favourite', item: true}));
      return {
        ...result,
        exists: exists,
        count: count,
        path: [
          {
            name: "Главная",
            path: "/"
          },
          {
            name: "Избранное",
            path: "/favourite"
          }
        ]
      }
    }
  }
}
</script>