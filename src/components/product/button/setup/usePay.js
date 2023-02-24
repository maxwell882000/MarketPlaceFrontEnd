import {useStore} from "vuex";
import {computed} from "vue";
import {useRouter} from "vue-router";

export default function (name, additional) {
    const store = useStore();
    const createOrder = (id, price) => store.dispatch("backetModule/addToBasket", {
        id: id,
        price: price
    });
    const remove = () => store.commit('wayOfPaymentModule/' + name, false);

    const addSelectedOrder = (order) => store.commit('prepareBasketModule/addToSelectedOrders', order);
    const product = computed(() => store.getters['productModule/product']);
    const router = useRouter();

    async function buyImmediately() {
        try {
            remove();
            const order = await createOrder(product.value.id, product.value.real_price);
            addSelectedOrder(order);
            if (additional)
                additional();
            router.push({
                name: "WayOfPayment"
            })
        } catch (e) {
            console.log(e);
        }

    }

    return {
        buyImmediately: buyImmediately
    }
}