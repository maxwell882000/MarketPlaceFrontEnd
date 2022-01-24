<template>
  <div class="down-line">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between links-row">
        <div>
          <b-button
            @click="categoriesOpened = !categoriesOpened"
            variant="primary"
            class="d-flex align-items-center"
          >
            <img
              v-if="!categoriesOpened"
              src="@/assets/icons/burger.svg"
              alt="burger icon"
              class="burger"
            />
            <img
              v-else
              src="@/assets/icons/x.svg"
              alt="x icon"
              class="burger"
            />
            Каталог товаров
          </b-button>
          <b-collapse
            id="categories"
            :visible="categoriesOpened"
            class="mt-2 categories"
          >
            <div class="container">
              <p class="card-text">Collapse contents Here</p>
            </div>
          </b-collapse>
        </div>
        <div class="header-link">
          <a href="#">
            <img src="@/assets/icons/coupon.svg" alt="coupon icon" />
            Предложения для вас
          </a>
        </div>
        <div class="header-link">
          <a href="#">
            <img src="@/assets/icons/fire.svg" alt="sales icon" />
            Скидки
          </a>
        </div>
        <div class="header-link"><a href="#">Электроника</a></div>
        <div class="header-link"><a href="#">Бытовая техника</a></div>
        <div class="header-link"><a href="#">Детям</a></div>
        <div class="header-link"><a href="#">Спорт</a></div>
        <div class="header-link"><a href="#">Продукты</a></div>
        <div class="header-link"><a href="#">Красота</a></div>
        <div class="header-link"><a href="#">Аптека</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header-Down-Line",
  data() {
    return {
      categoriesOpened: false,
    };
  },
};
</script>

<style scoped lang="scss">
.down-line {
  padding-top: 10px;
  background-color: white;
}
.links-row {
  overflow-x: auto;
  .btn-primary {
    white-space: nowrap;
    background: var(--blue) !important;
    border-radius: 8px;
    padding: 7px 15px;
    border: none;
    box-shadow: none !important;

    img {
      margin-right: 10px;
      width: 22px;
    }
  }
  .categories {
    position: fixed;
    width: 100%;
    left: 0;
    background-color: white;
  }
}
.header-link {
  padding: 10px;
  margin-bottom: 6px;
  a {
    white-space: nowrap;
    display: block;
    color: black;
    text-decoration: none;

    &::after {
      transition: all 0.3s ease-in-out;
      content: "";
      display: block;
      width: 0;
      height: 2px;
      left: 50%;
      background-color: var(--blue);
      border-radius: 50% 50% 0 0;
      opacity: 0;
      visibility: hidden;
      position: relative;
      bottom: -16px;
    }
    &:hover::after {
      left: 0;
      width: 100%;
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>