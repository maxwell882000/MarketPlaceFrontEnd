import methods from "@/services/api/methods";

class PurchaseService {
    async createPurchases(data) {
        console.log(data);
        const result = await methods.post("purchase/store/");
        return result.data.result;
    }
}

export default new PurchaseService();