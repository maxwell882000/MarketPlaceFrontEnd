<template>
  <div class="container pt-3 pb-5">
    <badge :path="path"/>
    <b-tabs
        pills
        card
        vertical
        nav-wrapper-class="bg-transparent border-0 w-30"
        active-nav-item-class="bg-white transparent-nav-active"
        class="user-tabs"
    >
      <b-tab @click="clicked"  active title-link-class="transparent-tab-passive">
        <template #title>
          <b-icon icon="person-fill" scale="1.5" class="me-2"/>
          Пользователь
        </template>
        <user-settings class="w-100"/>
      </b-tab>
      <b-tab title-link-class="transparent-tab-passive">
        <template #title>
          <b-icon icon="bag-fill" scale="1.5" class="me-2"/>
          Мои заказы
        </template>
        <order-user></order-user>
      </b-tab>
      <b-tab title="Tab 3" title-link-class="transparent-tab-passive">
        <template #title>
          <b-icon icon="credit-card-fill" scale="1.5" class="me-2"/>
          Оплата
        </template>
        <b-card-text>
          <choose-card></choose-card>
        </b-card-text>
      </b-tab>
      <b-tab title="Tab 3" title-link-class="transparent-tab-passive">
        <template #title>
            <b-icon icon="file-earmark-text-fill" scale="1.5" class="me-2"></b-icon>
          Мои документы
        </template>
        <b-card-text>
            <documents></documents>
          </b-card-text>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Badge from "../../components/shared/Badge.vue";
import UserSettings from "../../components/userPage/settings/userSettings.vue";
import OrderUser from "@/components/userPage/orders/ordersUser";
import ChooseCard from "@/components/userPage/payments/chooseCard";
import Documents from "@/components/userPage/documents/documents";

export default {
  data: () => ({
    path: [
      {
        name: "Главная",
        path: "/",
      },
      {
        name: "Профиль",
        path: "/user",
      },
    ],
  }),
  components: {Documents, ChooseCard, OrderUser, Badge, UserSettings},
  methods: {
    clicked() {
    }
  }
};
</script>

<style scoped>
.container {
  min-height: 800px;
}
</style>