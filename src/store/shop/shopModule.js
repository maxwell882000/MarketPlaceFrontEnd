import shopService from "@/services/shop/shopService";

export const shopModule = {
    namespaced: true,
    state() {
        return {
            shop: {}
        }
    },
    getters: {
        shop(state) {
            return state.shop;
        }
    },
    actions: {
        async getShop({commit}, slug) {
            commit("wait/START", "shop_loaded", {root: true});
            try {
                let result = await shopService.getShop(slug);
                commit('setShop', result.shop);
                commit('productFilterByModule/setFilterCanBeApplied', result.filter, {root: true});
            } catch (e) {
                console.log(e);
            }
            commit("wait/END", "shop_loaded", {root: true});
        }
    },
    mutations: {
        setShop(state, shop) {
            state.shop = shop;
        }
    }
}