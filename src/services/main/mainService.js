import methods from "@/services/api/methods";

class MainService {
    async main() {
        let result = await methods.get("home/");
        return result.data.result;
    }
    async lenta() {
        let result = await methods.get("home/lenta/");
        return result.data.result;
    }
    async products() {
        let result = await  methods.get("home/products/");
        return result.data.result;
    }
}

export default new MainService();