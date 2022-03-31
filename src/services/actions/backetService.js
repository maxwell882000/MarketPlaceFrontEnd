import methods from "@/services/api/methods";

class BacketService {
    async addToBasket(product_id, data) {
        console.log(data);
        await methods.post(`action/basket/${product_id}/`, data);
    }

    async removeFromBasket(product_id) {
        await methods.delete(`action/basket/remove/${product_id}/`);
    }

}

export default new BacketService();