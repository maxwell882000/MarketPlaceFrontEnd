import methods from "@/services/api/methods";

class AuthService {
    async login(request) {
        let response = await methods.post("login/", request);
        return response.data.result;
    }

    async getUser() {
        let response = await methods.get("user/");
        return response.data.result;
    }

    async logout() {
        try {
            await methods.get("logout/");
        } catch (e) {
            console.log(e);
        }
    }

    async register(request) {
        let result = await methods.post("register/", request);
        return result.data.result;
    }
}

export default new AuthService();