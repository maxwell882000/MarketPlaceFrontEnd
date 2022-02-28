<template>
  <div class="container pt-3 pb-5">
    <badge :path="path" />
    <b-tabs
      pills
      card
      vertical
      nav-wrapper-class="bg-transparent border-0"
      active-nav-item-class="bg-white transparent-nav-active"
      class="user-tabs"
    >
      <b-tab active title-link-class="transparent-tab-passive">
        <template #title>
          <b-icon icon="person-fill" scale="1.5" class="me-2" />
          Пользователь
        </template>
        <b-card-text> <user-settings class="w-100" /> </b-card-text>
      </b-tab>
      <b-tab title-link-class="transparent-tab-passive">
        <template #title>
          <b-icon icon="bag-fill" scale="1.5" class="me-2" /> Мои заказы
        </template>
        <b-card-text>Tab contents 2</b-card-text>
      </b-tab>
      <b-tab title="Tab 3" title-link-class="transparent-tab-passive">
        <template #title>
          <b-icon icon="credit-card-fill" scale="1.5" class="me-2" /> Оплата
        </template>
        <b-card-text>Tab contents 3</b-card-text>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Badge from "../components/shared/Badge.vue";
import UserSettings from "../components/userPage/userSettings.vue";
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
  components: { Badge, UserSettings },
};
</script>

<style scoped>
.container {
  min-height: 800px;
}
</style>