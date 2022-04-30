import axios from "axios";
// import tokenService from "@/services/auth/tokenService";
import store from "../../store/index";

const SERVER = "http://100.65.118.235:8000";
const instance = axios.create({
    baseURL: SERVER + "/api/",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
});
instance.interceptors.request.use((config) => {
    let token = store.getters["passwordModule/passToken"]() || store.getters.authToken();
    if (token) {
        config.headers["Authorization"] = 'Bearer ' + token;
    }
    let lang = store.getters.language() || "ru";
    if (lang) {
        config.headers['Accept-Language'] = lang;
    }
    return config;
})
export default instance;