<template>
  <b-tabs
    pills
    vertical
    nav-wrapper-class="bg-white left-tabs"
    class="nav-tabs"
    active-nav-item-class="bg-light text-violet"
    active-tab-class="text-uppercase text-dark"
  >
    <b-tab>
      <template #title>
        <smartphones />
        Смартфоны и гаджеты
      </template>
      <b-card-text>Tab contents 1</b-card-text></b-tab
    >
    <b-tab>
      <template #title>
        <laptops />
        Ноутбуки и компьютеры
      </template>
      <b-card-text>Tab contents 2</b-card-text></b-tab
    >
    <b-tab>
      <template #title>
        <forGamers />
        Все для геймеров
      </template>
      <b-card-text>Tab contents 3</b-card-text></b-tab
    >
    <b-tab>
      <template #title>
        <appliances />
        Бытовая техника
      </template>
      <b-card-text>Tab contents 4</b-card-text></b-tab
    >
    <b-tab>
      <template #title>
        <photo />
        Фото техника
      </template>
      <b-card-text>Tab contents 5</b-card-text></b-tab
    >
    <b-tab>
      <template #title>
        <tv />
        Тв и аудио
      </template>
      <b-card-text>Tab contents 6</b-card-text></b-tab
    >
    <b-tab>
      <template #title>
        <beauty />
        Красота и здоровье
      </template>
      <b-card-text>Tab contents 6</b-card-text></b-tab
    >
    <b-tab>
      <template #title>
        <sport />
        Спорт и туризм
      </template>
      <b-card-text>Tab contents 6</b-card-text></b-tab
    >
    <b-tab>
      <template #title>
        <auto />
        Автотовары и транспорт
      </template>
      <b-card-text>Tab contents 6</b-card-text></b-tab
    >
    <b-tab>
      <template #title>
        <child />
        Детские товары
      </template>
      <b-card-text>Tab contents 6</b-card-text></b-tab
    >
    <b-tab>
      <template #title>
        <home />
        Товары для дома и сада
      </template>
      <b-card-text>Tab contents 6</b-card-text></b-tab
    >
    <b-tab>
      <template #title>
        <building />
        Строительство, инструменты
      </template>
      <b-card-text>Tab contents 6</b-card-text></b-tab
    >
    <b-tab>
      <template #title>
        <country />
        Дача, огород
      </template>
      <b-card-text>Tab contents 6</b-card-text></b-tab
    >
    <b-tab>
      <template #title>
        <gift />
        Сувенирная продукция
      </template>
      <b-card-text>Tab contents 6</b-card-text></b-tab
    >
    <b-tab>
      <template #title>
        <furniture />
        Мебель
      </template>
      <b-card-text>Tab contents 6</b-card-text></b-tab
    >
    <b-tab>
      <template #title>
        <closes />
        Одежда
      </template>
      <b-card-text>Tab contents 6</b-card-text></b-tab
    >
  </b-tabs>
</template>

<script>
import Smartphones from "../icons/smartphones.vue";
import Laptops from "../icons/laptops.vue";
import ForGamers from "../icons/forgamers.vue";
import Appliances from "../icons/appliances.vue";
import Photo from "../icons/photo.vue";
import Tv from "../icons/tv.vue";
import Beauty from "../icons/beauty.vue";
import Sport from "../icons/sport.vue";
import Auto from "../icons/auto.vue";
import Child from "../icons/child.vue";
import Home from "../icons/home.vue";
import Building from "../icons/building.vue";
import Country from "../icons/country.vue";
import Gift from "../icons/gift.vue";
import Furniture from "../icons/furniture.vue";
import Closes from "../icons/closes.vue";

export default {
  components: {
    Smartphones,
    Laptops,
    ForGamers,
    Appliances,
    Photo,
    Tv,
    Beauty,
    Sport,
    Auto,
    Child,
    Home,
    Building,
    Country,
    Gift,
    Furniture,
    Closes,
  },
};
</script>

<style scoped>
.nav-tabs {
  height: 100%;
}
</style>