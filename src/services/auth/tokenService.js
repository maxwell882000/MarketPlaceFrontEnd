import cookies from 'vue-cookies'
import axios from 'axios';

class TokenService {
    /**
     * @returns {tokenWithType: string}
     */
    getToken() {
        const token = cookies.get('token');
        if(token) {
            return token;
        } else {
            console.error('[TokenService]: No token found!');
            return null;
        }
    }
    setTokenInHeader() {
        const token = this.getToken();
        if (token) {
            axios.defaults.headers.common['Authorization'] = token;
        }
    }
    /**
     * @param { obj<{token: string, expiration_date: number | string, token_type: string}> } param0 
     */
    setToken({token, expiration_date, token_type}) {
        // if there is any token_type, sets it, otherwise sets it to Bearer
        const tokenWithType = `${token_type || 'Bearer'} ${token}`
        // if expiration date is received, sets is as a cookie, otherwise sets for 1 year
        cookies.set('token', tokenWithType, expiration_date || 365 * 24 * 3600);
        // setting default header for all requests
        axios.defaults.headers.common['Authorization'] = tokenWithType;
    }

    removeToken() {
        delete axios.defaults.headers.common['Authorization'];
        return cookies.remove('token');
    }
}

export default new TokenService();