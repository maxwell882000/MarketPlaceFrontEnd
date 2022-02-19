import axios from "axios";

const SERVER = "http://localhost:8080";
const instance = axios.create({
    baseURL: SERVER + "/api/",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
});

export default instance;