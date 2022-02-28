import { createRouter, createWebHistory, } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/item/:id",
    name: "Item",
    component: () =>
      import("../views/Item.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () =>
      import("../views/Cart.vue"),
  },
  {
    path: "/shop/:id",
    name: "Shop",
    component: () =>
      import("../views/Shop.vue"),
  }, 
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
});

export default router;
