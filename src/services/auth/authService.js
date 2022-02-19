import api from "@/services/api/api";
import TokenService from "@/services/auth/TokenService";
import methods from "@/services/api/methods";

class AuthService {
    async login({phone, password}) {
        let form = new FormData();
        form.append("phone", phone);
        form.append("password", password);
        let response = await methods.post("login/", form);
        TokenService.setToken(response)
        return response.token;
    }

    async logout() {
        await methods.get("logout/");
        TokenService.removeToken();
    }

    async register({name, phone, password}) {
        let form = new FormData();
        form.append("phone", phone);
        form.append("name", name);
        form.append("password", password);
        return await api.post("/", {
            name,
            phone,
            password
        });
    }
}

export default new AuthService();