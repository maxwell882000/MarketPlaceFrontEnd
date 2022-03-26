import methods from "@/services/api/methods";

class OrderService {

    async getOrders(){
       let result = await  methods.get("/basket");
       return result.data.result;
    }
    async updateOrder(order_id, data) {
        await methods.put(`action/basket/${order_id}/`, data);
    }
    async destroyOrder(order_id) {
        await methods.delete(`action/basket/${order_id}/`);
    }
    // ids = { ids: [] }
    async massDestroyOrder(ids) {
        await methods.post("action/basket/destroy/orders/", ids);
    }
}
export default new OrderService();