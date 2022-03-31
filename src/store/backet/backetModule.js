import backetService from "@/services/actions/backetService";
import orderService from "@/services/basket/orderService";
// in backet page quantity will be immidatetely increased
export const backetModule = {
    namespaced: true,
    state() {
        return {
            quantity: {},
            order: {}
        }
    },
    getters: {

        getPreOrder: (state) => (id) => {
            return {
                quantity: state.quantity[id] || 1,
                order: state.order[id] || {}
            }
        },
    },
    mutations: {

        setQuantity(state, id, quantity) {
            state.quantity[id] = state.quantity[id] || 1;
            state.quantity[id] = quantity;
        },
        setOrder(state, {id, key, value}) {
            state.order[id] = state.order[id] || {};
            state.order[id][key] = value;
        },
        clear(state) {
            state.order = {};
            state.quantity = 1;
        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async addToBasket({commit, getters}, id) {
            try {
                await backetService.addToBasket(id, getters.getPreOrder(id));
            } catch (e) {
                console.log(e);
            }
        },
        // eslint-disable-next-line no-unused-vars
        async removeFromBasket({commit}, id) {
            try {
                await backetService.removeFromBasket(id);
            } catch (e) {
                console.log(e);
            }
        },

        async updatePreOrder({rootGetters}, data) {
            if (rootGetters.isAuthenticated) {
                let order_id = rootGetters["productModule/product"];
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