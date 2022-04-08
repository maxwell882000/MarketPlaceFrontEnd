export default function ({next, store}) {
    const orders = store.getters['prepareBasketModule/selectedOrders'];
    if (Object.entries(orders).length === 0) {
        return next({
            name: "basket"
        })
    }
    return next();
}