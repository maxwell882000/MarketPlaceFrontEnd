class ErrorService {
    sendError(method, input, message, code = 500) {
        console.log(message);
        return code + 2;
    }
}

export default new ErrorService();