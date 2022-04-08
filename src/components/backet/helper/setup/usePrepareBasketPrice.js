import {useStore} from "vuex";
import {computed} from "vue";

export default function () {
    const store = useStore();
    const selectedOrders = computed(() => store.getters['prepareBasketModule/isSelectedEmpty']);
    const overallPrice = computed(() => store.getters['prepareBasketModule/calculatePrice']('real_price'));
    const overallOldPrice = computed(() => store.getters['prepareBasketModule/calculatePrice']('price'));
    return {
        overallPrice: overallPrice,
        overallOldPrice: overallOldPrice,
        selectedLength: selectedOrders
    }
}