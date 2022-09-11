import statusPayment from "@/constants/payment/statusPayment";
import {useI18n} from "vue-i18n";

const t = useI18n().t;
const statusPaymentToFront = {}
statusPaymentToFront[statusPayment.WAIT_ANSWER] = {
    text: t("Обрабатываеться"),
    color: "back-gray text-dark",
};

statusPaymentToFront[statusPayment.ACCEPTED] = {
    text: t("Принят заказ"),
    color: "back-green text-white",
}
statusPaymentToFront[statusPayment.FINISHED] = {
    text: t("Оплачено"),
    color: "back-green text-white",
}
statusPaymentToFront[statusPayment.DECLINED] = {
    text: t("Отказано"),
    color: "bg-red text-white"
}
statusPaymentToFront[statusPayment.REQUIRED_SURETY] = {
    text: t("Первышен Лимит"),
    color: "bg-red text-white"
}

export default statusPaymentToFront;