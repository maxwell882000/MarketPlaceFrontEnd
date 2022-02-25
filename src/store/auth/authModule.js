import authService from "@/services/auth/authService";
import codeService from "@/services/auth/codeService";
import tokenService from "@/services/auth/tokenService";

// eslint-disable-next-line no-unused-vars
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export const authModule = {
    state() {
        return {
            token: tokenService.getToken(),
            loading: false,
            user: {
                name: "",
                phone: "",
            },
        }
    },
    getters: {
        authToken: (state) => () => state.token,
        isAuthenticated(state) {
            return state.token === undefined || state.token.length !== 0;
        }
    },
    actions: {
        async getUser({commit, getters}) {
            if (getters.isAuthenticated) {
                commit("wait/START", "user");
                let result = await authService.getUser();
                commit('setInitialUser', result);
                commit("wait/END", "user");
            }
        },
        async logout({commit}) {
            await authService.logout();
            commit("logoutUser");
        },
        async login({commit}, request) {
            commit("wait/START", "login");
            try {
                let token = await authService.login(request);
                commit('setToken', token);
                commit("authWindow/close");
            } catch (e) {
                commit("authWindow/setError", "Неверные данные");
            }
            commit("wait/END", "login");
        },
        // eslint-disable-next-line no-unused-vars
        async register({commit}, request) {
            commit("wait/START", "register");
            try {
                let result = await authService.register(request);
                result.phone = request.phone;
                result.name = request.name;
                commit("setUser", result);
                tokenService.setToken(result);
                commit("authWindow/setVerifyRegister");
            } catch (e) {
                commit('authWindow/setError', e);
            } finally {
                commit("wait/END", "register");
            }
        },
        async sendCode({commit}) {
            commit("wait/START", "code");
            try {
                await codeService.sendCode();
                commit("authWindow/setSuccess", "Код успешно был отправлен");
            } catch (e) {
                commit("authWindow/setError", "Не удалось отправить код");
                console.log(e);
            } finally {
                commit("wait/END", "code");
            }
        },
        async verifyCode({commit}, code) {
            commit("wait/START", "code");
            try {
                await codeService.verifyCode({code});
            } catch (e) {
                console.log(e);
            } finally {
                commit("wait/END", "code");
            }
        },
        async phoneCodeVerify({commit}, code) {
            commit("wait/START", "code");
            try {
                await codeService.phoneCodeVerify({code});
                commit("authWindow/close");
            } catch (e) {
                console.log(e);
            } finally {
                commit("wait/END", "code");
            }
        }
    },
    mutations: {
        setLoading(state, value) {
            state.loading = value;
        },
        setInitialUser(state, user) {
            state.user = user;
        },
        setUser(state, user) {
            state.user.name = user.name;
            state.user.phone = user.phone;
            state.token = user.token;
        },
        logoutUser(state) {
            state.user = {name: "", phone: ""};
            state.token = "";
            tokenService.removeToken();
        },
        setToken(state, token) {
            state.token = token;
            tokenService.setToken({token: token})
        },
    }
}