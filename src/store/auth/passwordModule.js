import passwordService from "@/services/auth/passwordService";
import codeService from "@/services/auth/codeService";

export const passwordModule = {
    namespaced: true,
    state() {
        return {
            passwordToken: "",
            phone: ""
        }
    },
    getters: {
        passToken: (state) => () => state.passwordToken
    },
    actions: {
        async issueToken({commit}, phone) {
            commit("wait/START", "issue_password", {root: true});
            try {
                let token = await passwordService.issueTokenForPassword(phone);
                commit("setPasswordToken", token);
                commit("setPhone", phone.phone);
                commit("authWindow/setVerifyForget", "", {root: true});
            } catch (e) {
                commit('authWindow/setError', e, {root: true});
            }
            commit("wait/END", "issue_password", {root: true});
        },
        async passwordVerify({commit}, code) {
            commit("wait/START", "code", {root: true});
            try {
                await codeService.verifyCode(code);
                commit("authWindow/setNewPassword", "", {root: true});
            } catch (e) {
                commit('authWindow/setError', "Код не верен", {root: true});
            } finally {
                commit("wait/END", "code", {root: true});
            }
        },
        async newPassword({commit}, password) {
            commit("wait/START", "new_password", {root: true});
            try {
                await passwordService.forgetPassword(password);
                commit('finishPassword');
                commit('authWindow/setLogin', "", {root: true});
                commit("authWindow/setSuccess", "Пароль успешно изменён", {root: true});
            } catch (e) {
                commit('authWindow/setError', e, {root: true});
            }
            commit("wait/END", "new_password", {root: true});
        }
    },
    mutations: {
        finishPassword(state) {
            state.passwordToken = "";
            state.phone = "";
        },
        setPasswordToken(state, token) {
            state.passwordToken = token.token;
        },
        setPhone(state, phone) {
            state.phone = phone;
        }
    }
}