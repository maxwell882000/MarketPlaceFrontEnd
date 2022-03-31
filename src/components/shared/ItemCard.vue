<template>
  <router-link :to="`/item/${product.id}`" class='item-card'>
    <div class="item-card__image">
      <div class="item-card__image__like">
        <Like :id="product.id" :favourite="product.favourite"/>
      </div>
      <div class="">
        <b-img v-lazy="product.image" class="image_style"  center fluid alt="item image"/>
      </div>
      <div class="item-card__image__sale-amount">
        <span>-{{ product.discount }}%</span>
      </div>
    </div>
    <div class="item-card__content">
      <div class="item-card__rating">
        <b-icon class="item-card__rating__star" icon="star-fill" size="sm"></b-icon>
        <small class="mx-1">{{ product.mark }}</small>
        <small class="mx-2">{{ product.num_comment }} отзывов</small>
      </div>
      <div class="item-card__prices">
        <p class="item-card__prices__ex-price">{{ product.price }} сум</p>
        <h6 class="item-card__prices__new-price">{{ product.real_price }} сум</h6>
      </div>
      <p class="item-card__description mb-1"> {{ product.title }}</p>
      <div class="item-card__price">
        <ItemCardPrice :basket="product.basket" :id="product.id" :credit="product.credit"/>
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
            month: "2"
          }
        }
      }
    }
  },
  components: {Like, ItemCardPrice}
}
</script>

<style scoped lang="scss">

.item-card {
  transition: all 0.3s;
  display: block;
  text-decoration: none;
  color: black;
  cursor: pointer;
  height: 100%;
  padding: 12px;
  background-color: white;
  border-radius: 12px;
  max-width: 228px;
  box-shadow: 0 0 0 transparent;

  .item-card__image {
    .item-card__image__like {
      display: flex;
      justify-content: flex-end;
      margin-bottom: -24px;
    }

    img {
      width: 100%;
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
    color: #FC9700;
  }

  .item-card__prices {
    line-height: 17px;

    .item-card__prices__ex-price {
      min-height: 17px;
      text-decoration: line-through;
      color: var(--red);
      margin: 0;
    }

    .item-card__prices__new-price {
      font-size: 20px;
    }
  }

  &:hover {
    box-shadow: 0 8px 14px rgba(0, 0, 0, 0.15);
    color: black;
  }
}
</style>
