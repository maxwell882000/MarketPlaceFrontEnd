import {createRouter, createWebHistory,} from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home,
    },

    {
        path: "/favourite",
        name: "Favourites",
        component: () => import("../views/favourites/favourites")
    },
    {
        path: "/search/:search",
        name: "Search",
        component: () => import("../views/search/searchView")
    },
    {
        path: "/verification",
        name: "VerificationAccount",
        component: () => import("../views/verification/verificationAccount"),
        children: [
            {
                path: "1",
                component: () => import("../views/verification/firstStep"),
            },
            {
                path: "2",
                component: () => import("../views/verification/secondStep"),
            },
            {
                path: "3",
                component: () => import("../views/verification/thirdStep"),
            },
            {
                path: "4",
                component: () => import("../views/verification/fourthStep"),
            }
        ]
    },
    {
        path: "/item/:id",
        name: "Item",
        component: () => import("../views/product/ItemMain"),
        children: [
            {
                path: "",
                name: "Item",
                component: () =>
                    import("../views/product/Item.vue"),
            },
            {
                path: "comment",
                name: "Comment",
                component: () => import("../views/product/RemainComment.vue")
            },
            {
                path: "description",
                name: "ItemDescription",
                component: () => import("../views/product/ItemDescription")
            }
        ]
    },
    {
        path: "/category",
        name: "CategoryView",
        component: () => import("../views/category/categoryMain"),
        children: [
            {
                path: "parent/:slug",
                sensitive: true,
                component: () => import("../views/category/categoryParentView")
            },
            {
                path: "sub/:slug",
                component: () => import("../views/category/categorySubView")
            },
            {
                path: "child/:slug",
                name: "CategoryListView",
                component: () => import("../views/category/categoryLastView"),
            },
        ]
    },
    {
        path: "/cart",
        component: () =>
            import("../views/takeOrder/BasketMain"),
        children: [
            {
                path: "",
                name: "Basket",
                component: () =>
                    import("../views/takeOrder/Basket"),
            },
            {
                path: "selectAddress",
                component: () => import("../views/takeOrder/selectAddress")
            },
            {
                path: "plasticCard",
                component: () => import("../views/takeOrder/plasticCard")
            },
            {
                path: "prepareOrder",
                component: () => import("../views/takeOrder/prepareOrder")
            },
            {
                path: "wayOfPayment",
                name: "WayOfPayment",
                component: () => import('../views/takeOrder/wayOfPayment')
            },
        ]
    },
    {
        path: "/shop/:shop",
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
