<template>
  <div class="container">
    <div class="thumbnail row align-items-end">
      <div class="col col-12 col-md-8 col-lg-5">
        <div class="seller-cart">
          <img src="@/assets/icons/apple.png" class="logo" alt=""/>
          <h6 class="mt-3 mb-1">Магазин Электроники</h6>
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <p class="mb-1">
                <small class="text-muted">
                  <b-icon icon="geo-alt-fill" class="me-1"/>
                  <span>Ташкент</span>
                </small>
              </p>
              <p class="mb-0">
                <stars rating="3"></stars>
                <span class="text-muted">{{ itemInfo.rating }} / 5</span>
              </p>
            </div>
            <button class="btn btn-light">
              <b-icon icon="share"/>
            </button>
          </div>
        </div>
      </div>
    </div>
    <product-wrapper></product-wrapper>
  </div>
</template>

<script>
import Stars from "@/components/product/stars";
import ProductWrapper from "@/components/shared/productWrapper";

export default {
  components: {ProductWrapper, Stars},
  data: () => ({
    itemInfo: {
      rating: 4.5,
    },
  }),
  computed: {
    starsIcons() {
      // return array of strings depending on rating
      let ratingCp = this.itemInfo.rating;
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
  },
};
</script>

<style scoped lang="scss">
.star {
  color: var(--yellow) !important;
}

.thumbnail {
  margin: 20px 0 40px 0;
  width: 100%;
  height: 300px;
  background-image: url("../assets/shop_cover.png");
  border-radius: 12px;

  .seller-cart {
    background-color: white;
    border-radius: 12px;
    height: 210px;
    box-shadow: 10px 9px 19px rgba(0, 0, 0, 0.17);
    margin-bottom: -20px;
    padding: 20px;

    img.logo {
      box-shadow: 0px 0.70562px 4.93934px rgba(0, 0, 0, 0.2);
      width: 74px;
      border-radius: 12px;
    }
  }
}

</style>