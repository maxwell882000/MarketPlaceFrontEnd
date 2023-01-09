import wayOfPaymentConstant from "@/constants/payment/wayOfPaymentConstant";

export default function userCredit({next, route, store}) {
    const isUserData = store.getters['isUserData'];
    const paymentType = store.getters['registrationOrderModule/wayOfPayment'].type;
    if (!isUserData && paymentType === wayOfPaymentConstant.INSTALLMENT) {
        return route({
            name: "start_verify"
        })
    }
    return next();
}