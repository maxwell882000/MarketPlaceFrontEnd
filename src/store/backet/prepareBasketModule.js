import orderService from "@/services/basket/orderService";

export const prepareBasketModule = {
    namespaced: true,
    state() {
        return {
            allOrders: [
                // shops
                // orders : [
                //    id,
                //    quantity
                //
                // ]
                //
            ],
            selectedOrders: [
                // order_id
                // quantity
                // order
            ],
        }
    },
    getters: {
        selectedOrders: (state) => {
            return state.selectedOrders;
        },
    },
    actions: {
        async getOrders({commit}) {
            commit("wait/START", "basket", {root: true});
            try {
                let result = await  orderService.getOrders();
                commit('setAllOrders', result);
            } catch (e) {
                console.log(e)
            }
            commit("wait/END", "basket", {root: false});
        },
        // eslint-disable-next-line no-unused-vars
        async destroyOrder({commit}, id) {
            try {
                await orderService.destroyOrder(id);
            } catch (e) {
                console.log(e);
            }
        },
        // eslint-disable-next-line no-unused-vars
        async updateOrder({commit}, {id, data}) {
            try {
                await orderService.updateOrder(id, data);
            } catch (e) {
                console.log(e);
            }
        },
        // ids = { ids: []}
        // eslint-disable-next-line no-unused-vars
        async massDestroyOrder({commit}, ids) {
            try {
                await orderService.massDestroyOrder(ids);
            } catch (e) {
                console.log(e);
            }
        }
    },
    mutations: {
        setAllOrders(state, orders) {
            state.allOrders = orders;
        },
        addAllToSelected(state) {
            state.allOrders.forEach(e => {
                e.orders.forEach(order => {
                    state.selectedOrders[order.id] = order;
                });
            });
        },
        addToSelectedOrders(state, order) {
            if (Array.isArray(order)) {
                order.forEach(e => {
                    state.selectedOrders[e.id] = e;
                });
            }
            state.selectedOrders[order.id] = order;
        },
        removeSelectedOrders(state, order) {
            if (Array.isArray(order)) {
                order.forEach(e => {
                    state.selectedOrders.splice(e.id, e.id);
                })
            }
            state.selectedOrders.splice(order.id, order.id);
        },
        cleanSelectedOrders(state) {
            state.selectedOrders = [];
        },
    }
}