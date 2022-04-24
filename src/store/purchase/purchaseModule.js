import purchaseService from "@/services/user/purchaseService";
import wayOfPaymentConstant from "@/constants/payment/wayOfPaymentConstant";
import statusPayment from "@/constants/payment/statusPayment";

export const purchaseModule = {
    namespaced: true,
    state() {
        return {
            purchases: [],
            errorPayment: {},
            errorInstallment: {},
            chosePlasticCard: false,
        }
    },
    actions: {
        async getPurchases({commit}) {
            commit("wait/START", "purchases_loaded", {root: true});
            try {
                const result = await purchaseService.getPurchases();
                commit('setPurchases', result.purchases);
            } catch (e) {
                console.log(e);
            }
            commit("wait/END", "purchases_loaded", {root: true});
        },
        async cancelPayment({commit, getters}, purchase) {
            commit("wait/START", "payment_" + purchase.id, {root: true});
            delete getters.errorPayment[purchase.id];
            try {
                await purchaseService.cancelPayment(purchase.id);
                purchase.status = statusPayment.DECLINED;
            } catch (e) {
                console.log(e);
                getters.errorPayment[purchase.id] = e;
            }
            commit("wait/END", "payment_" + purchase.id, {root: true});
        },
        async paidForMonth({commit}, {purchase, month_paid, plastic}) {
            commit("wait/START", "month_paid_loaded_" + purchase.id, {root: true});
            try {
                const result = await purchaseService.payForMonth({
                    month_paid_id: month_paid.id,
                    plastic: {
                        plastic_id: plastic
                    }
                });
                month_paid.paid = result.paid;
                purchase.next_paid_month = result.next_paid_month;
            } catch (e) {
                console.log(e);
            }
            commit("wait/END", "month_paid_loaded_" + purchase.id, {root: true});
        },
        async cancelInstallment({commit, getters}, {purchase, reason}) {
            commit("wait/START", "installment_" + purchase.id, {root: true});
            delete getters.errorInstallment[purchase.id];
            try {
                await purchaseService.cancelInstallment(purchase.id, reason);
            } catch (e) {
                console.log(e);
                getters.errorInstallment[purchase.id] = e;
            }
            commit("wait/END", "installment_" + purchase.id, {root: true});
        }
    },
    mutations: {
        setChosePlasticCard(state, plastic) {
            state.chosePlasticCard = plastic;
        },
        setPurchases(state, purchases) {
            state.purchases = purchases;
        },
        clean(state) {
            state.purchases = [];
            state.errorPayment = {};
            state.errorInstallment = {};
            state.chosePlasticCard = false;
        }
    },
    getters: {
        chosePlasticCard(state) {
            return state.chosePlasticCard;
        },
        onlyInstallment(state) {
            return state.purchases.filter(e => e.status === wayOfPaymentConstant.INSTALLMENT);
        },
        errorPayment(state) {
            return state.errorPayment;
        },
        errorInstallment(state) {
            return state.errorInstallment;
        },
        waitingPurchases(state) {
            return state.purchases.filter(e => e.payble.status === statusPayment.WAIT_ANSWER);
        },
        finishedPurchases(state) {
            return state.purchases.filter(e => e.payble.status === statusPayment.FINISHED
                || (e.status === wayOfPaymentConstant.CARD || e.status === wayOfPaymentConstant.CASH
                    && e.payble.status === statusPayment.ACCEPTED));
        },
        declinedPurchases(state) {
            return state.purchases.filter(e => e.payble.status === statusPayment.DECLINED);
        },
        purchases(state) {
            return state.purchases;
        }
    }
}