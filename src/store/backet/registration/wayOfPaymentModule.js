import wayOfPaymentConstant from "@/constants/payment/wayOfPaymentConstant";
import wayOfPaymentService from "@/services/purchase/wayOfPaymentService";

export const wayOfPaymentModule = {
    namespaced: true,
    state() {
        return {
            credits: [],
            chosenCredit: {
                type: wayOfPaymentConstant.NOT_CHOSEN,
                credits: []
            }
        }
    },
    actions: {
        async getWayOfPayment({commit, rootGetters}) {
            commit("wait/START", "credit_loaded", {root: true});
            try {
                const product_id = rootGetters['prepareBasketModule/productIds'];
                console.log(product_id);
                const result = await wayOfPaymentService.getCredits(product_id);
                console.log(result);
                commit("setCredits", result.credit);
            } catch (e) {
                console.log(e);
            }
            commit("wait/END", "credit_loaded", {root: true});
        }
    },
    mutations: {
        setChosenCreditsInstallment(state, credit) {
            state.chosenCredit = credit;
            state.chosenCredit.type = wayOfPaymentConstant.INSTALLMENT;
        },
        setChosenCreditCash(state, credit) {
            state.chosenCredit = credit;
            state.chosenCredit.type = wayOfPaymentConstant.CASH;
        },
        setChosenCreditCard(state, credit) {
            state.chosenCredit = credit;
            state.chosenCredit.type = wayOfPaymentConstant.CARD;
        },
        setCredits(state, credits) {
            state.credits = credits;
        },
        clean(state) {
            state.status = wayOfPaymentConstant.NOT_CHOSEN;
            state.credits = []
        }
    },
    getters: {
        chosenCredit(state) {
            return state.chosenCredit;
        },
        getMonth(state) {
            const credit = state.chosenCredit.credits;
            if (credit.length)
                return {
                    length: credit.length,
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