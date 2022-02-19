import authService from "@/services/auth/authService";

export const authModule = {
    state() {
        return {
            token: "",
            user: {
                name: "",
                phone: "",
            }
        }
    },
    getters: {},
    actions: {
        async login({commit}, user, phone) {
            let token = await authService.login(user, phone);
            commit('setToken', token);
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        }
    }
}