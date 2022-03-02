<template>
  <Badge class="badges" :path="path"></Badge>
  <h1>{{ name }}</h1>
  <div class="rating">
    <b-icon
        v-for="(star, iconI) in starsIcons"
        :key="'icon_' + iconI"
        :icon="star"
        class="star mx-1"
    />
    <span class="ratings-count">{{ rating }}</span>
    <span class="reviews-count">{{ reviews }} отзывов</span>
    <!--    <div class="rating__review top-icon">-->
    <!--      <img src="@/assets/icons/review.png" alt="comparison icon"/>-->
    <!--      <span>Оставить отзыв</span>-->
    <!--    </div>-->
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

export default {
  components: {Like, Badge},
  computed: {
    ...mapGetters({
      path: "productModule/path",
      reviews: "productModule/reviews",
      rating: "productModule/rating",
      name: "productModule/name",
      favourite: "productModule/favourite"
    }),
    starsIcons() {
      // return array of strings depending on rating
      let ratingCp = this.rating;
      const stars = [];
      for (let i = 1; i <= ratingCp; i++) {
        stars.push("star-fill");
      }
      // decimal part of ratingCp
      console.log(ratingCp);
      if (ratingCp % 1 > 0.4 && ratingCp % 1 < 0.85) {
        stars.push("star-half");
        ratingCp++;
      } else if (ratingCp % 1 > 0.85) {
        stars.push("star-fill");
        ratingCp++;
      }
      for (let i = 0; i < 5 - ratingCp; i++) {
        stars.push("star");
      }
      return stars;
    },
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