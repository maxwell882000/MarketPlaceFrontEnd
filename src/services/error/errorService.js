import store from "../../store/index";

class ErrorService {
    // eslint-disable-next-line no-unused-vars
    constructor() {
        this.error = null;
        this.method = "";
        this.input = null;
    }

    init(method, input, error) {
        this.method = method;
        this.input = input;
        this.error = error;
    }

    sendToServer() {
        if (this.error.response.status === 400) {
            //  send logs to server
        }
    }

    middleware() {
        if (this.error.response.status === 401) {
            // unauthorized
            store.commit("authWindow/setLogin");
        }
    }

    logError() {
        console.log("=============ERROR LOG \n");
        console.log(this.error.response);
        console.log(this.input);
        console.log(this.error.response.data.errors);
        console.log("=============FINISH ERROR LOG \n")
    }

    sendError(method, input, error) {
        this.init(method, input, error);
        this.sendToServer();
        this.middleware();
        this.logError();
        throw  error.response.data.errors;
    }
}

export default new ErrorService();