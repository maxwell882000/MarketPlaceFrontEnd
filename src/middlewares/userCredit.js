export default function ({next, store}) {
    const isUserData = store.getters['isUserData'];
    if (!isUserData) {
        return next({
            name: "start_verification"
        })
    }
    return next();
}