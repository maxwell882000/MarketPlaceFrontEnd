import axiosInstance from "./api";
import TokenService from "@/services/auth/TokenService";


const setup = (store) => {
    axiosInstance.interceptors.request.use(
        (config) => {
            const token = store.token || TokenService.getToken();
            if (token) {
                config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
};

export default setup;