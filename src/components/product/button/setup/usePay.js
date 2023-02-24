import {useStore} from "vuex";
import {computed} from "vue";
import {useRouter} from "vue-router";

export default function (name, additional) {
    const store = useStore();
    const createOrder = () => store.dispatch("backetModule/addToBasket", {
        id: product.value.id,
        price: product.value.real_price
    });
    const remove = () => store.commit('wayOfPaymentModule/' + name, false);

    const addSelectedOrder = (order) => store.commit('prepareBasketModule/addToSelectedOrders', order);
    const product = computed(() => store.getters['productModule/product']);
    const router = useRouter();

    async function buyImmediately() {
        console.log("PRESSED");
        try {
            remove();
            const order = await createOrder();
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