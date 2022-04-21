import authService from "@/services/auth/authService";
import codeService from "@/services/auth/codeService";
import tokenService from "@/services/auth/tokenService";

export const authModule = {
    state() {
        return {
            token: tokenService.getToken(),
            loading: false,
            user: {
                name: "",
                phone: "",
                // user_credit: true,
            },
        }
    },
    getters: {
        authToken: (state) => () => state.token,
        isAuthenticated(state) {
            return !!state.token;
        },
        isUserData(state) {
            return state.user.user_credit;
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
            window.location.reload();
        },
        async login({commit}, request) {
            commit("wait/START", "login");
            try {
                let token = await authService.login(request);
                commit('setToken', token.token);
                commit("authWindow/close");
                // window.location.reload();
            } catch (e) {
                commit("authWindow/setError", e);
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
                tokenService.setToken(result.token);
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
                await codeService.verifyCode(code);
            } catch (e) {
                commit('authWindow/setError', e);
            } finally {
                commit("wait/END", "code");
            }
        },
        async phoneCodeVerify({commit}, code) {
            commit("wait/START", "code");
            try {
                await codeService.phoneCodeVerify(code);
                commit("authWindow/close");
            } catch (e) {
                console.log(e);
                commit('authWindow/setError', e);
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
            console.log(state.user);
        },
        setUserData(state) {
          state.user.user_credit = true;
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
            console.log(`GET TOKEN ${token}`);
            state.token = token;
            tokenService.setToken({token: token})
        },
    }
}