<template>
  <div class="p-mobile pop-category">
    <name-and-route-all title="Популярные категории" ></name-and-route-all>
<!--    <div class="cat-mob d-flex justify-content-between align-items-center ">-->
<!--      <h5 class="text-md mb-3"></h5>-->
<!--      &lt;!&ndash;        <router-link to="category" class="remove-link">&ndash;&gt;-->
<!--      &lt;!&ndash;           <span> remove this comment when you understand where to point&ndash;&gt;-->
<!--      &lt;!&ndash;          Все&ndash;&gt;-->
<!--      &lt;!&ndash;        </span>&ndash;&gt;-->
<!--      &lt;!&ndash;        </router-link>&ndash;&gt;-->
<!--    </div>-->
    <Splide :options="{pagination:true, perPage:5, arrows:false, gap:20}">
      <SplideSlide :key="'pop_category_' + item.id" v-for="item in categories">
        <router-link :to="'/category/parent/' + item.slug"
                     class="remove-link d-flex flex-column
                       justify-content-center align-items-center ">
          <div style="height: 3rem; width: 3rem">
            <img class="img-res" :src="item.icon" alt="caetgory">
          </div>
          <span class="text-sm text-center two-only-sentence">
            {{ item.name }}
          </span>
        </router-link>
      </SplideSlide>
    </Splide>
  </div>

</template>

<script>
export default {
  name: "PopularCategories"
}
</script>
<script setup>
import {useStore} from "vuex";
import {computed} from "vue";
import NameAndRouteAll from "@/components/mainPage/mobile/nameAndRouteAll";

const store = useStore();
const categories = computed(() => store.getters['mainModule/popular_category'])
</script>

<style scoped>

.cat-mob {
  margin-top: 2.5rem;
}
</style>
<style>
.pop-category .splide__pagination {
  bottom: initial !important;
}
</style>