<template>
  <div v-if="showCategoryLine" class="down-line">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between links-row">
        <div class="d-none d-md-block">
          <b-button
              @click="toggle()"
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
              class="categories"
          >
            <div class="container filter-tabs mt-3">
              <FilterTabs/>
            </div>
          </b-collapse>
        </div>
        <!--        <div class="header-link">-->
        <!--          <a href="#">-->
        <!--            <img src="@/assets/icons/coupon.svg" alt="coupon icon" />-->
        <!--            Предложения для вас-->
        <!--          </a>-->
        <!--        </div>-->
        <!--        <div class="header-link">-->
        <!--          <a href="#">-->
        <!--            <img src="@/assets/icons/fire.svg" alt="sales icon" />-->
        <!--            Скидки-->
        <!--          </a>-->
        <!--        </div>-->
        <div v-for="item in nav_bar" :key="item.slug" class="header-link">
          <router-link :to="'/category/parent/' + item.slug">{{ item.name }}
          </router-link>
        </div>

<!--        <div class="header-link"><a href="#">Детям</a></div>-->
        <!--        <div class="header-link"><a href="#">Спорт</a></div>-->
        <!--        <div class="header-link"><a href="#">Продукты</a></div>-->
        <!--        <div class="header-link"><a href="#">Красота</a></div>-->
        <!--        <div class="header-link"><a href="#">Аптека</a></div>-->
      </div>
    </div>
  </div>
</template>

<script>
import {disableScrollBar, enableScrollBar} from "@/utils/bodyScrollBar";
import FilterTabs from "@/components/header/Filter-Tabs";
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "Header-Down-Line",
  components: {
    FilterTabs,
  },
  computed: {
    ...mapState({
      categoriesOpened: state => state.categoriesOpened
    }),
    ...mapGetters([
      'nav_bar',
      'categoriesOpened',
      'showCategoryLine'
    ])
  },
  methods: {
    ...mapMutations([
      'toggleCategoryOpened'
    ]),
    toggle() {
      this.toggleCategoryOpened();
    }
  },
  watch: {
    categoriesOpened() {
      window.scroll(0, 0);
      if (this.categoriesOpened) {
        disableScrollBar();
      } else {
        enableScrollBar();
      }
    },
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
    z-index: 667;
    width: 100%;
    left: 0;
    background-color: white;
    transition: all 0.3s;
    height: calc(100vh - 170px);

    &.collapsing {
      height: 0 !important;
    }
  }

  .filter-tabs {
    height: 100%;
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