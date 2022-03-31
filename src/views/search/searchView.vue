<template>
  <loader waiting="search_loaded">
    <section class="container mb-3">
      <Badge :path="path"></Badge>
      <empty-search v-if="!exists"></empty-search>
      <template v-else>
        <h4 class="my-3">Результаты поиска: <span class="text-orange">{{ router.params.search }}</span> <span
            class="text-xs text-400 text-gray">Найдено {{ count }} товаров</span></h4>
        <filter-with-products></filter-with-products>
      </template>
    </section>
  </loader>
</template>
<script setup>
import EmptySearch from "@/components/search/emptySearch";
import Badge from "@/components/shared/Badge";
import {useRoute} from "vue-router";
import {computed, onBeforeUnmount, ref, watch} from "vue";
import {useStore} from "vuex";
import FilterWithProducts from "@/components/filter/component/filterWithProducts";
import Loader from "@/components/loading/loader";

const store = useStore();
const router = useRoute();
const path = ref([
  {
    name: "Главная",
    path: "/",
  }, {
    name: "Результаты поиска : " + router.params.search,
    path: "/search/" + router.params.search
  }
]);
const exists = computed(() => store.getters['productFilterByModule/isProductExists'])
const count = computed(() => store.getters['productFilterByModule/count'])
const getSearchFilter = (val) => store.dispatch("searchModule/getSearchFilter", val);

onBeforeUnmount(() => store.commit("productFilterByModule/clean"));
watch(() => router.params, (val) => {
      if (val.search) {
        path.value[1] = {
          name: "Результаты поиска : " + val.search,
          path: "/search/" + val.search
        };
      }
      getSearchFilter(val.search);
    },
    {immediate: true}
)

</script>
