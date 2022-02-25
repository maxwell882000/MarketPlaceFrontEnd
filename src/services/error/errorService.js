class ErrorService {
    // eslint-disable-next-line no-unused-vars
    sendError(method, input, error) {
        console.log(error);
        if (error.response.status === 400) {
            //  send logs to server
        }
        console.log("=============ERROR LOG \n");
        console.log(error.response);
        console.log(input);
        console.log(error.response.data.errors);
        console.log("=============FINISH ERROR LOG \n")
        throw  error.response.data.errors;
    }
}

export default new ErrorService();