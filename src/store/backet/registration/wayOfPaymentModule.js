import wayOfPaymentConstant from "@/constants/payment/wayOfPaymentConstant";
import wayOfPaymentService from "@/services/purchase/wayOfPaymentService";

export const wayOfPaymentModule = {
    namespaced: true,
    state() {
        return {
            credits: [],
            mainCredit: {
                type: wayOfPaymentConstant.NOT_CHOSEN,
                credits: [] // here is info for choosing appropriate tariff in wayOfPaymentPrice
            },
        }
    },
    actions: {
        async getWayOfPayment({commit, rootGetters}) {
            commit("wait/START", "credit_loaded", {root: true});
            try {
                const product_id = rootGetters['prepareBasketModule/productIds'];
                const result = await wayOfPaymentService.getCredits(product_id);
                commit("setCredits", result.credit);
            } catch (e) {
                console.log(e);
            }
            commit("wait/END", "credit_loaded", {root: true});
        }
    },
    mutations: {
        setMainCreditInstallment(state, credit) {
            state.mainCredit = credit;
            console.log("CHANGED");
            state.mainCredit.type = wayOfPaymentConstant.INSTALLMENT;
        },
        setMainCreditCash(state, credit) {
            state.mainCredit = credit;
            state.mainCredit.type = wayOfPaymentConstant.CASH;
        },
        setMainCreditCard(state, credit) {
            state.mainCredit = credit;
            state.mainCredit.type = wayOfPaymentConstant.CARD;
        },
        setCredits(state, credits) {
            state.credits = credits;
        },
        clean(state) {
            state.mainCredit.type = wayOfPaymentConstant.NOT_CHOSEN;
            state.credits = []
        }
    },
    getters: {
        mainCredit(state) {
            return state.mainCredit;
        },
        getMonth(state) {
            const credit = state.mainCredit.credits;
            if (credit && credit.length)
                return {
                    length: credit.length - 1,
                    max: credit.at(-1).month ?? 0,
                    min: credit.at(0).month ?? 0,
                    value: 0,
                    values: credit.map(e => e.month)
                }
            return {
                length: 0,
                max: 0,
                min: 0,
                values: []
            }
        },
        credits(state) {
            return state.credits;
        }
    }
}