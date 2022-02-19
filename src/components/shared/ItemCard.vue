<template>
    <router-link to="/item/2" class="item-card">
        <div class="item-card__image">
            <div class="item-card__image__like">
              <Like />
            </div>
            <img src="@/assets/item-image.png" alt="item image">
            <div class="item-card__image__sale-amount">
                <span>-6%</span>
            </div>
        </div>
        <div class="item-card__content">
            <div class="item-card__rating">
              <b-icon class="item-card__rating__star" icon="star-fill" size="sm"></b-icon>
              <small class="mx-1">4.6</small>
              <small class="mx-2">86 отзывов</small>
            </div>
            <div class="item-card__prices">
              <p class="item-card__prices__ex-price">3 071 880 сум</p>
              <h6 class="item-card__prices__new-price">2 898 000 сум</h6>
            </div>
            <p class="item-card__description mb-1">Чехол Apple Leather Sleeve for MacBook Pro 13 black</p>
            <div class="item-card__price">
              <ItemCardPrice />
            </div>
        </div>
    </router-link>
</template>

<script>
import ItemCardPrice from "./ItemCardPrice";
import Like from "../buttons/Like";
export default {
  components: {Like, ItemCardPrice}
}
</script>

<style lang="scss">
  .item-card {
    transition: all 0.3s;
    display: block;
    text-decoration: none;
    color: black;
    cursor: pointer;
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
        padding: 2.5px 9.5px;
        border-radius: 20px;
        background-color: var(--red);
        color: white;
        width: max-content;
      }
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
