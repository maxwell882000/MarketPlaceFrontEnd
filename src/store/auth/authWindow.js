export const authWindow = {
    namespaced: true,
    state() {
        return {
            isLogin: false,
            isRegister: false,
            isForgetPassword: false,
            isVerifyRegister: false,
            isVerifyForget: false,
            error: "",
            success: "",
            codePhone: "",
        }
    },
    mutations: {
        setError(state, error) {
            state.error = error;
        },
        setCodePhone(state, phone) {
            state.codePhone = phone;
        },
        setSuccess(state, success) {
            state.success = success;
        },
        setVerifyForget(state) {
            state.isLogin = false;
            state.isForgetPassword = false;
            state.isRegister = false;
            state.isVerifyRegister = false;
            state.isVerifyForget = true;
            state.error = "";
            state.success = "";
        },
        setVerifyRegister(state) {
            state.isLogin = false;
            state.isForgetPassword = false;
            state.isRegister = false;
            state.isVerifyRegister = true;
            state.isVerifyForget = false;
            state.error = "";
            state.success = "";
        },
        setLogin(state) {
            state.isLogin = true;
            state.isForgetPassword = false;
            state.isRegister = false;
            state.isVerifyRegister = false;
            state.isVerifyForget = false;
            state.error = "";
            state.success = "";
        },
        setForget(state) {
            state.isForgetPassword = true;
            state.isLogin = false;
            state.isRegister = false;
            state.isVerifyRegister = false;
            state.isVerifyForget = false;
            state.error = "";
            state.success = "";
        },
        setRegister(state) {
            state.isRegister = true;
            state.isLogin = false;
            state.isForgetPassword = false;
            state.isVerifyRegister = false;
            state.isVerifyForget = false;
            state.error = "";
            state.success = "";
        },
        close(state) {
            state.isForgetPassword = false;
            state.isLogin = false;
            state.isRegister = false;
            state.isVerifyRegister = false;
            state.isVerifyForget = false;
            state.error = "";
            state.success = "";
        }
    }
}