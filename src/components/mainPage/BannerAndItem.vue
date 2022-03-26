<template>
  <div class="row">
    <div class="col-xl-9 col-12">
      <Splide class="splide" :options="{ autoplay: true, type: 'loop' }">
        <SplideSlide class="border-st" v-for="item in banners" :key="'banners_id' + item.id"
                     data-splide-interval="3000">
          <div class="banner_image" :href="item.link">
            <b-img fluid :src="item.image" class="border-st img-res"
                   alt="Sample 1"/>
          </div>
        </SplideSlide>
      </Splide>
    </div>
    <div class="col-lg-3 item-of-day-col">
      <router-link :to="`/item/${product.id}`" class="route-delete">
        <div v-if="Object.keys(product).length !== 0" class="d-flex flex-column item-of-day">
          <div class="item-of-day-title">
            <h5>Товар дня</h5>
            <div class="time">{{ getTime }}</div>
          </div>
          <div class="flex-grow-1 item-of-day-content d-flex flex-column">
            <div class="icons">
              <Like style="position: absolute" :favourite="product.favourite" :id="product.id" class="like"/>
            </div>
            <!--             do not know why it is work -->
            <div class="flex-grow-1">
              <b-img fluid class="img-res" center :src="product.image" alt="mi-band"/>
            </div>
            <div class="item-of-day-info">
              <p class="item-of-day__description mb-1">
                {{ product.title }} fdfa lsk lfk fl;dk l;fk ds;lfkds;lf k;l sdkl;f
              </p>
              <ItemPrice :basket="product.basket" :id="product.id" :credit="product.credit"/>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Like from "../buttons/Like";
import ItemPrice from "../shared/ItemCardPrice";
import {mapGetters} from "vuex";

export default {
  components: {ItemPrice, Like},

  computed: {
    ...mapGetters('mainModule', [
      'banners',
      'getTime'
    ]),
    ...mapGetters({
      product: "mainModule/first_product"
    })
  }
};
</script>

<style scoped lang="scss">
.splide {
  img {
    width: 100%;
  }
}

.route-delete {
  text-decoration: none;
  color: inherit;
}

.item-of-day {
  text-decoration: none !important;
  transition: all 0.3s;
  min-height: 100%;
  background-color: white;
  border-radius: 14px;
  padding: 10px 18px;

  .item-of-day-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    h5 {
      margin-bottom: 0;
      font-weight: 600;
    }

    .time {
      border: 1px solid #f2f2f2;
      border-radius: 5px;
      padding: 2px 10px;
      font-weight: 500;
      background: -webkit-linear-gradient(
              109.44deg,
              #325fff 14.9%,
              #d356ff 92.39%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }


  .icons {
    display: flex;
    flex-direction: row;
    justify-content: end;
    transition: all 0.3s;

    visibility: hidden;
    opacity: 0;
    padding-bottom: 10px;
  }

  .item-of-day__description {
    line-height: 18px;
  }

  &:hover {
    box-shadow: 0 8px 14px rgba(0, 0, 0, 0.15);

    .icons {
      visibility: visible;
      opacity: 1;
    }
  }
}

.banner_image {
  height: 20rem;
}

@media (max-width: 1200px) {
  .item-of-day-col {
    display: none;
  }
}
</style>