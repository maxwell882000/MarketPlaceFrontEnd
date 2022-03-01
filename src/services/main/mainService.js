import methods from "@/services/api/methods";

class MainService {
    async main() {
        let result = await methods.get("home/");
        return result.data.result;
    }

}
export default new MainService();