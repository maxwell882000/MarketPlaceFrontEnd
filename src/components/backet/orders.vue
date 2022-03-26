<template>
  <div class="d-flex align-items-end mb-2">
    <h3 class="mb-0">Корзина</h3>
    <small class="text-muted ms-2 mb-1">1 товар</small>
  </div>
  <div class="row">

    <div class="col col-12 col-lg-8">
      <div class="card py-2 px-3">
        <b-form-checkbox value="all" @click="checkAll" name="checkbox-1">
          Выбрать все товары
        </b-form-checkbox>
      </div>
      <basket-order></basket-order>
    </div>
    <div class="col col-12 pt-3 pt-lg-0 col-lg-4">
      <div class="card py-3 px-4">
        <div class="d-flex align-items-center flex-row">
          <b-icon icon="info-circle-fill" class="me-3" variant="secondary"/>
          <p class="mb-0">
            Выберите товары, чтобы перейти к оформлению заказа
          </p>
        </div>
        <router-link to="/cart/prepareOrder" class='remove-link'>
          <button
              :disabled="buttonDisabled"
              class="btn w-100 mt-3 py-2 btn-primary"
          >
            Перейти к оформлению
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>

import BasketOrder from "@/components/backet/basketOrder";
import {mapMutations} from "vuex";
export default {
  components: {BasketOrder},
  data() {
    return {
      buttonDisabled: true,
      allOrders: undefined,
      badgePath: [
        {
          name: "Главная",
          path: "/",
        },
        {
          name: "Корзина",
          path: "/cart",
        },
      ],
      itemInfo: {
        oldPrice: "3 071 880",
        price: "2 898 000",
        name: "Смартфон Samsung Galaxy A12 (SM-A125) 3/32 ГБ RU, красный",
        picture:
            "https://www.lg.com/in/images/tvs/md06117716/gallery/Desk-02.jpg",
      },
    };
  },
  methods: {

    ...mapMutations({
      setAll: 'prepareBasketModule/addToSelectedOrders'
    }),
    checkAll(event) {
    this.allOrders = event.target.checked;
    },

  }
};

</script>