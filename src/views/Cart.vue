<template>
  <section class="container py-3">
    <Badge class="mb-2" :path="badgePath" />
    <div class="card empty-card">
      <img src="@/assets/Basket.png" alt="basket image" />
      <h4>В корзине пока ничего нет</h4>
      <p>
        Вы можете начать покупки с главной страницы или воспользоваться поиском,
        если ищете что-то конкретное.
      </p>
      <router-link to="/" class="goto-catalogue btn btn-primary">
        Перейти в каталог
      </router-link>
    </div>
  </section>

  <section class="container">
    <div class="d-flex align-items-end mb-2">
      <h3 class="mb-0">Корзина</h3>
      <small class="text-muted ms-2 mb-1">1 товар</small>
    </div>
    <div class="row">
      <div class="col col-12 col-lg-8">
        <div class="card py-2 px-3">
          <b-form-checkbox v-model="status" name="checkbox-1">
            Выбрать все товары
          </b-form-checkbox>
        </div>
        <div class="card mt-3 py-2 px-3">
          <b-form-checkbox>
            <b-icon icon="shop" class="me-1" variant="secondary" />
            MacBro
            <router-link to="/">
              <b-icon icon="chevron-compact-right" variant="secondary" />
            </router-link>
          </b-form-checkbox>
          <div class="line"></div>
          <CartItem :itemInfo="itemInfo" />
        </div>
      </div>
      <div class="col col-12 pt-3 pt-lg-0 col-lg-4">
        <div class="card py-3 px-4">
          <div class="d-flex align-items-center flex-row">
            <b-icon icon="info-circle-fill" class="me-3" variant="secondary" />
            <p class="mb-0">
              Выберите товары, чтобы перейти к оформлению заказа
            </p>
          </div>
          <button
            :disabled="buttonDisabled"
            class="btn w-100 mt-3 py-2 btn-primary"
          >
            Перейти к оформлению
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="container">
    <h5 class="mt-3 mb-3">Вам может быть интересно</h5>
    <SalesRoll />
  </section>
</template>

<script>
import SalesRoll from "@/components/shared/SalesRoll.vue";
import Badge from "@/components/shared/Badge.vue";
import CartItem from "@/components/cart/Cart-item.vue";
export default {
  data() {
    return {
      buttonDisabled: true,
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
  components: { Badge, SalesRoll, CartItem },
};
</script>

<style scoped lang="scss">
.card {
  border: none;
  border-radius: 12px;

  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  &.empty-card {
    align-items: center;
    padding: 20px;
  }
  .goto-catalogue {
    padding: 10px 40px;
    border-radius: 12px;
  }
  .line {
    margin: 10px 0;
    background: #f2f2f2;
    width: 100%;
    height: 1px;
  }
  .btn {
    font-size: 14px;

    &[disabled] {
      background-color: #f2f2f2;
      color: var(--grey);
      border-color: transparent;
    }
  }
}
</style>