import plasticCardService from "@/services/plasticCard/plasticCardService";

export const plasticCardModule = {
    namespaced: true,
    state() {
        return {
            transaction_id: null,
            cards: [],
            errors: ""
        }
    },
    getters: {
        transaction_id(state) {
            return state.transaction_id;
        },
        cards(state) {
            return state.cards;
        },
        errors(state) {
            return state.errors;
        }
    },
    actions: {
        async getCards({commit}) {
            commit("wait/START", "card_loaded", {root: true});
            try {
                const result = await plasticCardService.getCards();
                commit('setCards', result.cards);
            } catch (e) {
                console.log(e);
                commit('setErrors', e);
            }
            commit("wait/END", "card_loaded", {root: true});
        },
        async getTransactionForPlastic({commit}, {card_number, expiry}) {
            commit("wait/START", "plastic_transaction_send", {root: true});
            try {
                const result = await plasticCardService.getTransactionForPlastic(
                    {
                        card_number: card_number,
                        expiry: expiry
                    }
                );
                commit('setTransactionId', result.transaction_id);
            } catch (e) {
                commit('setErrors', e);
            }
            commit("wait/END", "plastic_transaction_send", {root: true});
        },
        async dialCode({commit, getters}) {
            commit("wait/START", "dial_code_loaded", {root: true});
            try {
                const transaction_id = getters.transaction_id;
                await plasticCardService.dialCode({transaction_id: transaction_id});
            } catch (e) {
                console.log(e);
                commit('setErrors', e);
            }
            commit('wait/END', "card_loaded", {root: true});
        },
        async insertCard({commit, getters}, {code, card_number}) {
            commit("wait/START", "plastic_card_insert_loaded", {root: true});
            try {
                const transaction_id = getters.transaction_id;
                const result = await plasticCardService.insertPlasticCard({
                    transaction_id: transaction_id,
                    code: code,
                    card_number: card_number
                });
                getters.cards.push(result); // insert newly added plastic card to show in front end
                commit('setTransactionId', null) // cleaning transaction id , so it will not be used again
                return result; // returning newly inserted card
            } catch (e) {
                console.log(e);
                commit("setErrors", e);
            }
            commit("wait/END", "card_loaded", {root: true});
        },
        async revokeCard({commit}, plastic_id) {
            commit("wait/START", "revoke_card_" + plastic_id, {root: true});
            try {
                await plasticCardService.revokeCard(plastic_id);

            } catch (e) {
                console.log(e);
            }
            commit("wait/END", "revoke_card_" + plastic_id, {root: true});
        }
    },
    mutations: {
        setTransactionId(state, transaction_id) {
            state.transaction_id = transaction_id;
        },
        setErrors(state, errors) {
            state.errors = errors;
        },
        setCards(state, cards) {
            state.cards = cards;
        }
    }
}