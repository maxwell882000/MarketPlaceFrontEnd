import backetService from "@/services/actions/backetService";
import orderService from "@/services/basket/orderService";
// in backet page quantity will be immidatetely increased
export const backetModule = {
    namespaced: true,
    state() {
        return {
            order: {}
        }
    },
    getters: {
        chosenColors: (state) => (product_id) => {
            if (state.order && state.order[product_id] && state.order[product_id].colors)
                return state.order[product_id].colors.id;
            return -1;
        },
        additional: (state) => (product_id) => {
            if (state.order && state.order[product_id]
                && state.order[product_id].additional) {
                return state.order[product_id].additional;
            }
            return {};
        },
        chosenAdditional: (state) => (product_id, index) => {
            if (state.order && state.order[product_id]
                && state.order[product_id].additional
                && state.order[product_id].additional[index]
                && state.order[product_id].additional[index].value)
                return state.order[product_id].additional[index].value.id;
            return -1;
        },
        getPreOrder: (state) => (id) => {
            return {
                quantity: 1,
                order: state.order[id] || {}
            }
        },
    },
    mutations: {
        setOrder(state, {id, key, value}) {
            state.order[id] = state.order[id] || {};
            state.order[id][key] = value;
        },
        clear(state) {
            state.order = {};
        }
    },
    actions: {
        async addToBasket({commit, getters, rootGetters}, id) {
            try {
                const preOrder = getters.getPreOrder(id);
                preOrder.price = rootGetters["productModule/product"].real_price.replace(/\s/g, '');
                let data = await backetService.addToBasket(id, preOrder);
                commit("productModule/setProductOrder", data.id, {root: true});
                let isExistsOrder = rootGetters['user'].basket_ids.filter(e => e === data.id);
                if (!isExistsOrder.length) {
                    commit('increaseBasketCounter', null, {root: true});
                    commit("setBasketIds", data.id, {root: true});
                }
                return data;

            } catch (e) {
                console.log(e);
            }
        },
        async removeFromBasket({commit}, id) {
            try {
                await backetService.removeFromBasket(id);
                commit("productModule/setProductOrder", 0, {root: true});
                commit('decreaseBasketCounter', id, {root: true});
            } catch (e) {
                console.log(e);
            }
        },

        async updatePreOrder({rootGetters}, data) {
            if (rootGetters.isAuthenticated) {
                let order_id = rootGetters["productModule/order_id"];
                if (order_id) {
                    try {
                        await orderService.updateSelectOrder(order_id, data);
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
        }
    }
}