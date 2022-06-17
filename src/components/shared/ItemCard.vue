<template>
  <router-link :to="`/item/${product.id}`" class="item-card d-flex flex-column">
    <div class="item-card__image">
      <div class="item-card__image__like">
        <Like :id="product.id" :favourite="product.favourite"/>
      </div>
      <div class="image-sizing">
        <b-img v-lazy="product.image" class="image_style" center fluid alt="item image"/>
      </div>
      <div v-show="product.discount" class="item-card__image__sale-amount">
        <span>-{{ product.discount }}%</span>
      </div>
    </div>
    <div class="item-card__content d-flex flex-column h-100 justify-content-around">
      <div class="item-card__rating">
        <b-icon
            class="item-card__rating__star"
            icon="star-fill"
            size="sm">
        </b-icon>
        <small class="mx-1">{{ product.mark }}</small>
        <small class="mx-2">{{ product.num_comment }} отзывов</small>
      </div>
      <div class="item-card__prices">

        <p class="item-card__prices__ex-price" v-show="isChangedPrice">{{ product.price }} сум</p>
        <h6 class="item-card__prices__new-price">
          {{ product.real_price }} сум
        </h6>
      </div>
      <p class="item-card__description mb-1">{{ product.title }}</p>
      <div class="item-card__price">
        <ItemCardPrice
            :basket="product.basket"
            :id="product.id"
            :credit="product.credit"
        />
      </div>
    </div>
  </router-link>
</template>

<script>
import ItemCardPrice from "./ItemCardPrice";
import Like from "../buttons/Like";

export default {
  props: {
    product: {
      type: Object,
      default() {
        return {
          id: undefined,
          image: require('@/assets/item-image.png'),
          title: "Чехол Apple Leather Sleeve for MacBook Pro 13 black fdasfd afd dfsf fdsaf dfa ",

          favourite: false,
          basket: false,
          price: "3 071 880",
          real_price: "2 898 000",
          discount: 6,
          mark: 0,
          num_comment: 0,
          credit: {
            name: "Рассрочка",
            price: "150 000",
            month: "2",
          },
        };
      },
    },
  },
  computed: {
    isChangedPrice() {
      return this.product.real_price !== this.product.price;
    }
  },
  components: {Like, ItemCardPrice},
};
</script>

<style scoped lang="scss">
.item-card__prices__new-price {
  margin-bottom: 0 !important;
}

.item-card__description {
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

}

.item-card {
  transition: all 0.3s;
  display: block;
  text-decoration: none;
  color: black;
  cursor: pointer;
  height: 20rem;
  padding: 12px;
  background-color: white;
  border-radius: 12px;
  width: 13.8rem;
  box-shadow: 0 0 0 transparent;

  .image-sizing {
    height: 10rem;
  }

  .item-card__image__sale-amount {
    font-size: 12px !important;
    line-height: 15px;
    margin-bottom: 0 !important;
  }

  @media (max-width: 767px) {
    .image_style {
      height: 9rem;
    }

    .item-card__description {
      font-size: 12px !important;
      line-height: 13px;
      margin-bottom: 0 !important;


    }
    .item-card__prices__ex-price {
      font-size: 12px !important;
      line-height: 13px;
      margin-bottom: 0 !important;
    }
    .item-card__prices__new-price {
      font-size: 15px !important;
      line-height: 15px;
      margin-bottom: 0 !important;

    }
  }
  @media (max-width: 491px) {
    height: 20.5rem !important;

  }
  @media (max-width: 491px) and (min-width: 420px) {
    width: 12.5rem;
    .image-sizing {
      height: 10rem !important;
    }

  }
  @media (max-width: 425px) {
    width: 12rem;
    .image-sizing {
      height: 10rem !important;
    }
  }
  @media (max-width: 375px) and (min-width: 321px) {
    width: 11rem;
    .image-sizing {
      height: 7rem !important;
    }
  }
  @media (max-width: 320px) {
    width: 8.7rem;
    .item-card__image__sale-amount {
      font-size: 10px !important;
    }
    .item-card__description {
      font-size: 10px !important;
    }
    .item-card__prices__ex-price {
      font-size: 10px !important;
    }
    .item-card__prices__new-price {
      font-size: 13px !important;
    }
  }

  .item-card__image {
    .item-card__image__like {
      display: flex;
      justify-content: flex-end;
      margin-bottom: -24px;
    }


    img {
      height: 100%;
      width: 100%;
      object-fit: fill;
    }

    .item-card__image__sale-amount {
      margin-top: -25px;
      margin-bottom: 5px;
      margin-left: 10px;
      font-size: 15px;
      position: relative;
      padding: 2.5px 9.5px;
      border-radius: 20px;
      background-color: var(--red);
      color: white;
      width: max-content;
    }

    //.item-card__image__sale-amount span:hover{
    //  color: white !important;
    //}
  }

  .item-card__rating__star {
    color: #fc9700;
  }

  .item-card__prices {
    line-height: 22px;

    .item-card__prices__ex-price {
      min-height: 17px;
      font-size: 14px;
      line-height: 17px;
      text-decoration: line-through;
      color: var(--red);
      margin: 0;
    }

    .item-card__prices__new-price {
      font-size: 18px;
    }
  }

  &:hover {
    box-shadow: 0 8px 14px rgba(0, 0, 0, 0.15);
    color: black;
  }
}
</style>
