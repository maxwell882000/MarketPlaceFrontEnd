import axios from "axios";
// import tokenService from "@/services/auth/tokenService";
import store from "../../store/index";

const SERVER = "http://machina.uz:49153";
const instance = axios.create({
    baseURL: SERVER + "/api/",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
});
instance.interceptors.request.use((config) => {
    let token = store.getters.authToken().token;
    console.log(token);
    if (token) {
        config.headers["Authorization"] = 'Bearer ' + token;
    }
    console.log(store.getters.language());
    let lang = store.getters.language() || "ru";
    if (lang) {
        config.headers['Accept-Language'] = lang;
    }
    return config;
})
export default instance;