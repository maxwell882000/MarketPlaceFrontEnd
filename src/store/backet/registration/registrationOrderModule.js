import deliveryService from "@/services/purchase/deliveryService";
import deliveryConstant from "@/constants/delivery/deliveryConstant";
import wayOfPaymentConstant from "@/constants/payment/wayOfPaymentConstant";

export const registrationOrderModule = {
    namespaced: true,
    state() {
        return {
            deliveryCost: {
                different_shop: false
                //'price' => $price, 'days' => $day, 'different_shop' => $products->count() > 1
            },
            wayOfPayment: {
                type: wayOfPaymentConstant.NOT_CHOSEN,
                // additional info will be sent depending on what option was selected
                //credit_id -- will be deleted if not installment
                //initial_price -- will be deleted if not installment
                // also will be deleted from selected orders -- wrong
                // all will be stored here
                // price
                // real_price --- must be set using discount_percent from price
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
        async getCostOfDelivery({commit, getters, rootGetters}) {
            commit("wait/START", "delivery_price_loaded", {root: true});
            try {
                const form = {
                    ...getters.deliveryInfo,
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
        wayOfPayment(state){
          return state.wayOfPayment;
        },
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
        cleanDelivery(state) {
            state.deliveryCost = {};
            state.deliveryInfo = {};
        },
        clean(state) {
            state.deliveryCost = {};
            state.form = {};
        },
        deleteWayOfPayment(state, key) {
            delete state.wayOfPayment[key];
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
