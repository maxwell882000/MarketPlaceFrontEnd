export const orderModule = {
    namespaced: true,
    state() {
        return {
            quantity: {},
        }
    },
    getters: {},
    actions: {},
    mutations: {
        setQuantity(state, id, quantity) {
            state.quantity[id] = state.quantity[id] || 1;
            state.quantity[id] = quantity;
        },
    }
}