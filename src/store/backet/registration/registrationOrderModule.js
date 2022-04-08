import deliveryService from "@/services/purchase/deliveryService";
import deliveryConstant from "@/constants/delivery/deliveryConstant";

export const registrationOrderModule = {
    namespaced: true,
    state() {
        return {
            deliveryCost: {
                different_shop: false
                //'price' => $price, 'days' => $day, 'different_shop' => $products->count() > 1
            },
            deliveryInfo: {},
            form: {
                // delivery
                // "purchase->delivery_address->city_id" => "1"
                // "purchase->delivery_address->index" => "123456"
                // "purchase->delivery_address->street" => "124124"
                // "purchase->delivery_address->house" => "1244"
                // "purchase->delivery_address->flat" => "2421"
                // "purchase->delivery_address->instructions" => "124214214124"
            }
        }
    },
    actions: {
        async getCostOfDelivery({commit, rootGetters}) {
            commit("wait/START", "delivery_price_loaded", {root: true});
            try {
                const form = {
                    ...rootGetters['deliveryInfoModule/deliveryInfo'],
                    "order_ids": rootGetters['prepareBasketModule/ordersId']
                };
                const result = await deliveryService.calculateDeliveryPrice(form);
                commit('setDeliveryCost', result);
            } catch (e) {
                console.log(e);
            }
            commit("wait/END", "delivery_price_loaded", {root: true});
        }
    },
    getters: {
        deliveryCost(state) {
            return state.deliveryCost
        },
        deliveryInfo(state) {
            return state.deliveryInfo;
        },
        fullAddress(state) {
            return `${state.deliveryInfo[deliveryConstant.ADDRESS_NAME]}, ${state.deliveryInfo[deliveryConstant.STREET]}`;
        },
        homeInfo(state) {
            return `${state.deliveryInfo[deliveryConstant.HOUSE]} дом, ${state.deliveryInfo[deliveryConstant.FLAT]} квартира`;
        },
    },
    mutations: {
        cleanDelivery(state){
            state.deliveryCost = {};
            state.deliveryInfo = {};
        },
        clean(state) {
            state.deliveryCost = {};
            state.form = {};
        },
        setDeliveryInfo(state, deliveryInfo) {
            state.deliveryInfo = deliveryInfo;
        },
        setDeliveryCost(state, cost) {
            state.deliveryCost = cost;
        }
    }
}

///
// payment_type -- if it was paid in place
// orders : [ 1, 2,3, ] // with ids
// "user_id" => null
// "plastic_id" => "9f57b37f-0359-4f65-bca0-12a3561e30cb"
// "credit_id" => "1"
// "initial_price" => "12125"
// "delivery" => null set delivery if it exists
