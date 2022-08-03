<template>
  <section class="d-flex justify-content-between footer-mobile">
    <router-link :to="item.path" :key="'footer-mobile_' + index" v-for="(item, index) in footer" class="remove-link">
      <div>
        <component :is="item.icon" style="display: block; margin: auto"></component>
      </div>
      <span>{{ item.title }}</span>
    </router-link>
  </section>
</template>

<script setup>
import HomeFooter from "@/components/icons/footer/home-footer";
import CategoryFooter from "@/components/icons/footer/category-footer";
import BasketFooter from "@/components/icons/footer/basket-footer";
import FavouriteFooter from "@/components/icons/footer/favourite-footer";
import ProfileFooter from "@/components/icons/footer/profile-footer";

const footer = [
  {
    icon: HomeFooter,
    title: "Главная",
    path: "/",
  },
  {
    icon: CategoryFooter,
    title: "Категории",
    path: "/category/catalogue"
  },
  {
    icon: BasketFooter,
    title: "Корзина",
    path: "/cart",
  },
  {
    icon: FavouriteFooter,
    title: "Избранное",
    path: "/favourite"
  },
  {
    icon: ProfileFooter,
    title: "Профиль",
    path: "/user"
  },
]
</script>

<style scoped>
.footer-mobile {
  margin-top: 3rem;
  padding: 1rem 1rem 2rem;
  font-size: 0.7rem;
  background-color: white;
}
</style>