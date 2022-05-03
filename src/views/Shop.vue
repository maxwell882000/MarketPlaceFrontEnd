<template>
  <loader waiting="shop_loaded">

    <section class="container">
      <div class="margin-cont">
        <div
            v-bind:style="{ 'background-image': 'url(' + shop.image + ')' }"
            class="thumbnail row align-items-end">
          <div class="col col-12 col-md-8 col-lg-5 col-sm-12">
            <div class="seller-cart">
              <img :src="shop.logo" class="logo p-3" alt=""/>
              <h6 class="mt-3 mb-1">{{ shop.name }}</h6>
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <p class="mb-1">
                    <small class="text-muted">
                      <b-icon icon="geo-alt-fill" class="me-1"/>
                      <span>{{ shop.address }}</span>
                    </small>
                  </p>
                  <p class="mb-0">
                    <!--                <stars rating="3"></stars>-->
                    <!--                <span class="text-muted">{{ itemInfo.rating }} / 5</span>-->
                  </p>
                </div>
                <!--            <button class="btn btn-light">-->
                <!--              <b-icon icon="share"/>-->
                <!--            </button>-->
              </div>
            </div>
          </div>
        </div>
        <filter-with-products></filter-with-products>
      </div>

      <!--    <product-wrapper></product-wrapper>-->
    </section>
  </loader>

</template>

<script setup>
import {useStore} from "vuex";
import {computed} from "vue";
import useFilterWithComponent from "@/components/filter/setup/useFilterWithComponent";
import useFilterBy from "@/components/filter/setup/useFilterBy";
import {useRoute} from "vue-router";
import FilterWithProducts from "@/components/filter/component/filterWithProducts";
import Loader from "@/components/loading/loader";

const store = useStore();
const route = useRoute();

const shop = computed(() => store.getters['shopModule/shop']);
const getShop = (val) => store.dispatch("shopModule/getShop", val);
getShop(route.params.shop);
useFilterWithComponent(useFilterBy({key: "shop_id", item: shop.value.id}))
</script>

<style scoped lang="scss">
.star {
  color: var(--yellow) !important;
}

.margin-cont {
  margin-bottom: 2rem;
}

.thumbnail {
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  height: 300px;
  //background-image: url("../assets/shop_cover.png");
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 12px;
  @media (max-width: 575px) {
    margin-left: 2px;
  }

  .seller-cart {
    background-color: white;
    border-radius: 12px;
    height: 10rem;
    box-shadow: 10px 9px 19px rgba(0, 0, 0, 0.17);
    padding: 20px;

    img.logo {
      box-shadow: 0px 0.70562px 4.93934px rgba(0, 0, 0, 0.2);
      width: 74px;
      border-radius: 12px;
    }
  }
}

</style>