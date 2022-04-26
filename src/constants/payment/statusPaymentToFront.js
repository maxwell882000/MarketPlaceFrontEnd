import statusPayment from "@/constants/payment/statusPayment";

const statusPaymentToFront = {}
statusPaymentToFront[statusPayment.WAIT_ANSWER] = {
    text: "Обрабатываеться",
    color: "back-gray text-dark",
};

statusPaymentToFront[statusPayment.ACCEPTED] = {
    text: "Принят заказ",
    color: "back-green text-white",
}
statusPaymentToFront[statusPayment.FINISHED] = {
    text: "Оплачено",
    color: "back-green text-white",
}
statusPaymentToFront[statusPayment.DECLINED] = {
    text: "Отказано",
    color: "bg-red text-white"
}
statusPaymentToFront[statusPayment.REQUIRED_SURETY] = {
    text: "Первышен Лимит",
    color: "back-red text-white"
}

export default statusPaymentToFront;