<template>
  <Badge class="badges" :path="path"></Badge>
  <h1>{{ name }}</h1>
  <div class="rating">
    <stars :rating="rating"></stars>
    <span class="ratings-count">{{ rating }}</span>
    <span class="reviews-count">{{ reviews }} отзывов</span>
    <div class="rating__review top-icon">
      <img src="@/assets/icons/review.png" alt="comparison icon"/>
      <router-link class="remove-link" to="/comment"><span>Оставить отзыв</span></router-link>
    </div>
    <div class="rating__comparison top-icon">
      <Like :id="favourite.id" :favourite="favourite.favourite"></Like>
      <span>В избранное</span>
    </div>
    <!--    <div class="rating__comparison top-icon">-->
    <!--      <img src="@/assets/icons/comparison.png" alt="comparison icon"/>-->
    <!--      <span>Сравнить</span>-->
    <!--    </div>-->
  </div>
</template>
<script>
import Badge from "@/components/shared/Badge";
import {mapGetters} from "vuex";
import Like from "@/components/buttons/Like";
import Stars from "@/components/product/stars";

export default {
  components: {Stars, Like, Badge},
  computed: {
    ...mapGetters({
      path: "productModule/path",
      reviews: "productModule/reviews",
      rating: "productModule/rating",
      name: "productModule/name",
      favourite: "productModule/favourite"
    }),

  }
}
</script>
<style lang="scss">
.badges {
  margin-top: 16px;
  margin-bottom: 4px;
}

.rating {
  margin-bottom: 25px;
  display: flex;
  align-items: center;

  .ratings-count {
    margin-left: 5px;
    margin-right: 8px;
  }

  .top-icon {
    display: flex;
    align-items: center;
    margin-left: 15px;
    cursor: pointer;

    img {
      margin-right: 8px;
    }
  }
}

.star {
  color: var(--yellow) !important;
}

</style>