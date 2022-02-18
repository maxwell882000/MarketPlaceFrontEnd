<template>
  <section class="container">
    <Badge class="badges" :path="path"></Badge>
    <h1>{{ itemInfo.name }}</h1>
    <div class="rating">
      <b-icon
        v-for="(star, iconI) in starsIcons"
        :key="'icon_' + iconI"
        :icon="star"
        class="star mx-1"
      />
      <span class="ratings-count">{{ itemInfo.rating }}</span>
      <span class="reviews-count">{{ itemInfo.reviews }} отзывов</span>
      <div class="rating__review top-icon">
        <img src="@/assets/icons/review.png" alt="comparison icon" />
        <span>Оставить отзыв</span>
      </div>
      <div class="rating__comparison top-icon">
        <img src="@/assets/icons/heart-semi.png" alt="comparison icon" />
        <span>В избранное</span>
      </div>
      <div class="rating__comparison top-icon">
        <img src="@/assets/icons/comparison.png" alt="comparison icon" />
        <span>Сравнить</span>
      </div>
    </div>
  </section>
  <section class="container">
    <div class="row cols">
      <div class="col-lg-9">
        <div class="product-content">
          <pictures-part class="pictures"></pictures-part>
          <div class="">
            <h6>Цвет</h6>
            <div class="color-select">
              <button
                v-for="(color, colorIndex) in colorImages"
                :key="'color_' + colorIndex"
                :class="[
                  'color-btn',
                  colorIndex == chosenColorIndex ? 'active' : '',
                ]"
                @click="chosenColorIndex = colorIndex"
              >
                <img :src="color.img" alt="color" />
                <small>{{ color.name }}</small>
              </button>
            </div>
            <template
              v-for="(param, paramIndex) in paramsList"
              :key="param.name"
            >
              <h6 class="mt-4">{{ param.name }}</h6>
              <div class="d-flex flex-wrap">
                <button
                  v-for="(option, optionIndex) in param.options"
                  :key="option"
                  @click="chosenParams[paramIndex] = optionIndex"
                  :class="[
                    'param-option',
                    chosenParams[paramIndex] == optionIndex ? 'active' : '',
                  ]"
                >
                  {{ option }}
                </button>
              </div>
            </template>
            <h6 class="mt-4">Коротко о товаре</h6>
            <ul class="mb-0">
              <li>экран: 6.5 (1600х720)</li>
              <li>4 камеры: 48 МП, 5 МП, 2 МП, 2 МП</li>
              <li>аккумулятор: 5000 мАч</li>
              <li>процессор: Samsung Exynos 850</li>
              <li>SIM-карты: 2 (nano SIM)</li>
              <li>операционная система: Android 10</li>
              <li>беспроводные интерфейсы: NFC, Bluetooth, Wi-Fi</li>
              <li>стандарт связи: 4G LTE, 3G</li>
              <li>вес: 205 г</li>
            </ul>
            <!-- <b-button v-b-toggle.deep-info variant="link">Подробнее</b-button>
            <b-collapse id="deep-info" class="mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              quo recusandae repudiandae.
            </b-collapse> -->
            <h6 class="mt-4">Продавец</h6>
            <router-link
              to="/"
              class="seller d-flex align-items-center justify-content-between"
            >
              <router-link
                to="/shop/1"
                class="d-flex align-items-center shop-link"
              >
                <img src="@/assets/icons/apple.png" alt="seller icon" />
                <div class="mx-1">
                  <p class="mb-0">MacBro</p>
                  <p class="mb-0">
                    <b-icon icon="star-fill" class="star" />
                    <span class="text-muted mx-2">4.6 86 отзывов</span>
                  </p>
                </div>
              </router-link>
              <b-icon icon="chevron-right" />
            </router-link>
          </div>
        </div>
        <div class="about-item mt-4">
          <b-tabs
            class="about-content"
            active-nav-item-class="active-tab"
            active-tab-class=""
            content-class="mt-3"
          >
            <b-tab>
              <template #title>
                <h5 class="tab-content">О товаре</h5>
              </template>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                rerum ratione asperiores tempore consequatur at iste possimus
                consectetur, cupiditate magni alias consequuntur officiis
                temporibus sapiente nulla sed, minus, odit distinctio atque
                adipisci hic ipsum voluptas?
              </p>
            </b-tab>
            <b-tab>
              <template #title>
                <h5 class="tab-content">Характеристики</h5>
              </template>
              <table class="dotted-table">
                <tr>
                  <th><span>Версия ОС на начало продаж</span></th>
                  <th><span>Android 10</span></th>
                </tr>
                <tr>
                  <th><span>Тип корпуса</span></th>
                  <th><span>сгибаемый</span></th>
                </tr>
                <tr>
                  <th><span>Материал корпуса</span></th>
                  <th><span>алюминий</span></th>
                </tr>
              </table>
            </b-tab>
          </b-tabs>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="price">
          <div class="payment-info">
            <p class="old-price" v-if="itemInfo.oldPrice">
              <small>{{ itemInfo.oldPrice }}</small>
            </p>
            <h5 class="price">
              {{ itemInfo.price }} <small class="sale-percent">-6%</small>
            </h5>
            <div class="installment-plan row">
              <div class="col active col-2">
                1 <br />
                мес
              </div>
              <div class="col col-2">
                2 <br />
                мес
              </div>
              <div class="col col-2">
                3 <br />
                мес
              </div>
              <div class="col col-2">
                4 <br />
                мес
              </div>
              <div class="col col-2">
                5 <br />
                мес
              </div>
              <div class="col col-2">
                6 <br />
                мес
              </div>
            </div>
            <div class="installment-pay pt-3 text-center">
              <p class="text-muted mb-1">Рассрочка 0% до 6 месяцев</p>
              <h5>250 000 x 6 месяцев</h5>
              <div class="mt-3 d-flex justify-content-between">
                <p class="payment-param">Ежемесячный платеж:</p>
                <p class="payment-data">150 000 сум</p>
              </div>
              <div class="d-flex justify-content-between">
                <p class="payment-param">Сумма/процент переплаты:</p>
                <p class="payment-data percents">0 сум/0%</p>
              </div>
              <div class="d-flex justify-content-between">
                <p class="payment-param">Ежемесячный платеж:</p>
                <p class="payment-data">150 000 сум</p>
              </div>
            </div>
            <div class="buttons">
              <div class="d-flex mb-2">
                <div class="w-100 buy-now">
                  <button class="w-100">Купить сразу</button>
                </div>
                <div class="add2cart col-offset-1">
                  <button class="w-100">
                    <img src="@/assets/icons/bag.png" alt="bag" />
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <button class="installment-buy w-100">
                    Купить в рассрочку
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="delivery">
          <span class="d-flex align-items-center">
            Доставка в <button class="btn btn-link p-0 mx-1">Ташкент</button>
          </span>
          <p class="d-flex align-items-center mt-2 mb-2">
            <img src="@/assets/icons/delivery-icon.png" alt="delivery icon" />
            <span class="mx-3">Доставка от <b>15 000 сум</b></span>
          </p>
          <p class="d-flex align-items-center mb-2">
            <img src="@/assets/icons/time.png" alt="time icon" />
            <span class="mx-3">Доставка ожидается 07.11 - 08.11</span>
          </p>
          <p class="d-flex align-items-center mb-2">
            <img src="@/assets/icons/box.png" alt="box icon" />
            <span class="mx-3">До двери через <b>Fargo</b></span>
          </p>
          <p class="d-flex align-items-center mt-3 delivery-calculation">
            <img src="@/assets/icons/box-clock.png" alt="delivery icon" />
            <span class="mx-2"
              >Стоимость и предполагаемая дата доставки рассчитывается на основе
              вашего адреса по умолчанию</span
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Badge from "../components/shared/Badge.vue";
import PicturesPart from "../components/item/PicturesPart.vue";
export default {
  components: { Badge, PicturesPart },
  name: "Item",
  data() {
    return {
      path: [
        {
          name: "Главная",
          path: "/",
        },
        {
          name: "Электроника",
          path: "/categories/electronics",
        },
        {
          name: "Смартфоны",
          path: "/categories/electronics/smartphones",
        },
        {
          name: "Смартфон Apple iPhone XR",
          path: "/item/1",
        },
      ],
      itemInfo: {
        name: "Смартфон Apple iPhone XR",
        rating: 4.6,
        reviews: 86,
        price: "2 898 000 сум",
        oldPrice: "3 071 880 сум", // если нет старой цены, то не пишем старую цену
      },
      colorImages: [
        {
          img: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-product-iphone-11-black-back.png",
          name: "Черный",
        },
        {
          img: "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1604517546555-J765GMQHYO74IFMZ2RWQ/iphone+12.png?format=1000w",
          name: "Красный",
        },
        {
          img: "https://www.cricketwireless.com/uiassets/DAPW4208-detail-side.jpg",
          name: "Синий",
        },
      ],
      paramsList: [
        {
          name: "Встроенная память, ГБ",
          options: ["32", "64", "128"],
        },
      ],
      chosenColorIndex: 0,
      chosenParams: [0],
    };
  },
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

<style lang="scss" scoped>
.cols {
  margin-bottom: 30px;
}
.star {
  color: var(--yellow) !important;
}
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
.shop-link,
.shop-link * {
  text-decoration: none;
  color: black;
}
.product-content {
  background-color: white;
  padding: 24px;
  border-radius: 12px;
  display: flex;

  .pictures {
    width: 50%;
    min-width: 50%;
  }
  .color-select {
    display: flex;
    flex-wrap: wrap;
  }
  .color-btn,
  .param-option {
    background-color: transparent;
    border: 1px solid #f2f2f2;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-self: center;
    margin: 4px;

    img {
      height: 62px;
      width: 62px;
      left: 9px;
      top: 5px;
      border-radius: 8px;
      object-fit: contain;
    }
    small {
      display: block;
      width: 100%;
      text-align: center;
    }

    &.active {
      border-color: transparent;
      box-shadow: 0 0 0 2px #007aff;
    }
  }
  .param-option {
    padding: 3px 15px;
  }
}
.seller {
  text-decoration: none;
  color: black;
  padding: 5px;
  border-radius: 7px;

  &:hover {
    background-color: rgba(248, 247, 247, 0.7);
  }
}
.payment-info {
  background-color: white;
  padding: 24px;
  border-radius: 12px;
  .price {
    font-weight: 600;
    padding-bottom: 20px;
    border-bottom: 1px solid #f2f2f2;

    .sale-percent {
      padding: 2px 10px;
      font-weight: 400;
      background-color: var(--red);
      border-radius: 20px;
      color: white;
      font-size: 12px;
    }
  }
  .installment-plan {
    text-align: center;
    border: 1px solid #f2f2f2;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 500;

    .col {
      padding: 10px 0 !important;
      line-height: 15px;
      border-right: 1px solid #f2f2f2;

      &:first-child {
        border-radius: 12px 0 0 12px;
      }
      &:last-child {
        border-radius: 0 12px 12px 0;
        border-right: none !important;
      }
    }
    .col.active {
      background-color: var(--blue);
      color: white;
    }
  }
  .installment-pay {
    padding-bottom: 5px;
    margin-bottom: 20px;
    border-bottom: 1px solid #f2f2f2;

    .payment-param {
      font-size: 12px;
      margin-bottom: 9px;
    }
    .payment-data {
      line-height: 15px;
      font-weight: 500;
      font-size: 14px;
      margin-bottom: 0px;

      &.percents {
        color: green;
      }
    }
  }
  .buttons {
    margin: 0 -10px;

    .buy-now {
      margin-right: 10px;
    }
    button {
      transition: all 0.3s;
      border: none;
      background-color: #f2f2f2;
      padding: 8px;
      border-radius: 9px;
      color: #282f3c;
      font-size: 14px;
      font-weight: 500;

      &:hover {
        background-color: #e0e0e0;
      }
    }
    .add2cart {
      padding-left: 0;
    }
    .installment-buy {
      background-color: #f71757;
      color: white;

      &:hover {
        background-color: #d81e53;
      }
    }
  }
}
.delivery {
  background-color: white;
  border-radius: 12px;
  margin-top: 20px;
  padding: 20px 0 20px 20px;

  p {
    font-size: 12px;
  }
  .delivery-calculation {
    font-size: 10px;
  }
}
.about-item {
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;

  .about-content {
    max-width: 500px;
  }
  .tab-content {
    font-weight: 600 !important;
    color: grey;
  }
}
</style>