import methods from "@/services/api/methods";

class BacketService {
    async addToBasket(product_id, data) {
        await methods.post(`action/basket/${product_id}/`, data);
    }

    async removeFromBasket(product_id) {
        await methods.delete(`action/basket/remove/${product_id}/`);
    }

    async updateOrder(order_id, data) {
        await methods.put(`api/action/basket/${order_id}/`, data);
    }

    async destroyOrder(order_id) {
        await methods.delete(`action/basket/${order_id}/`);
    }

    // ids = { ids: [] }
    async massDestroyOrder(ids) {
        await methods.post("action/basket/destroy/orders/", ids);
    }

}

export default new BacketService();