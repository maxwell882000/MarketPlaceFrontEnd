const TOKEN = "token";

class TokenService {

    getToken() {
        return localStorage.getItem(TOKEN)
    }

    setToken(token) {
        return localStorage.setItem(TOKEN, token);
    }

    removeToken() {
        localStorage.removeItem(TOKEN);
    }
}

export default new TokenService();