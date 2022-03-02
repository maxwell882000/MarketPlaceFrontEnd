import methods from "@/services/api/methods";

class ProductService {
    async getProduct(id) {
        let result = await methods.get(`product/${id}/`);
        return result.data.result;
    }
}

export default new ProductService();