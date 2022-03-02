<template>
  <div class="row">
    <div class="col-xl-9 col-12">
      <Splide class="splide" :options="{ autoplay: true, type: 'loop' }">
        <SplideSlide v-for="item in banners" :key="'banners_id' + item.id" data-splide-interval="3000">
          <a :href="item.link">
            <img :src="item.image" alt="Sample 1"/>
          </a>
        </SplideSlide>
      </Splide>
    </div>
    <div class="col-lg-3 item-of-day-col">
      <router-link :to="`/item/${product.id}`" class="route-delete">
        <div v-if="Object.keys(product).length !== 0" class="item-of-day">
          <div class="item-of-day-title">
            <h5>Товар дня</h5>
            <div class="time">{{ getTime }}</div>
          </div>
          <div class="item-of-day-content">
            <div class="item-of-day-image">
              <div></div>
              <img :src="product.image" alt="mi-band"/>
              <div class="icons">
                <Like :favourite="product.favourite" :id="product.id" class="like"/>
                <!--              <Gift class="gift"/>-->
              </div>
            </div>
            <div class="item-of-day-info">
              <p class="item-of-day__description mb-1">
                {{ product.title }}
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

  .item-of-day-image {
    display: flex;
    padding: 0 10px;
    justify-content: space-between;

    .icons {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.3s;
      visibility: hidden;
      opacity: 0;
      padding-bottom: 10px;
    }
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

@media (max-width: 1200px) {
  .item-of-day-col {
    display: none;
  }
}
</style>