import {createRouter, createWebHistory,} from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: '/asd',
        name: "Home",
        component: Home,
    },
    {
        path: "/asd",
        name: "CategoryListView",
        component: () => import("../views/category/categoryLastView"),
    },
    {
        path: "/",
        name: "VerificationAccount",
        component: () => import("../views/verification/verificationAccount")
    },
    {
        path: "/item/:id",
        name: "Item",
        component: () =>
            import("../views/product/Item.vue"),
    },
    {
        path: "/comment",
        name: "RemainComment",
        component: () => import("../views/product/RemainComment.vue")
    },
    {
        path: "/category/:slug",
        name: "CategoryView",
        component: () => import("../views/category/categoryView")
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
        component: () => import("../views/user/User.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {top: 0}
        }
    }
});

export default router;
