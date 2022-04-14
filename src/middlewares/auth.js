export default function ({next, store}) {
    const isAuthenticated = store.getters['isAuthenticated'];
    if (!isAuthenticated) {
        store.commit('authWindow/setLogin');
        return next({
            name: "Home"
        })
    }
    return next();
}