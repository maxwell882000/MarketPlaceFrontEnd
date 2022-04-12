import {useStore} from "vuex";
import {computed} from "vue";
import wayOfPaymentConstant from "@/constants/payment/wayOfPaymentConstant";
import {useRouter} from "vue-router";

export default function (installment, overallPrice, mainCredit) {
    const store = useStore();
    const wayOfPayment = computed(() => store.getters['registrationOrderModule/wayOfPayment']);
    const credit = computed(() => store.getters['wayOfPaymentModule/chosenCredit']);
    const deleteWayOfPaymentKey = (key) => store.commit("registrationOrderModule/deleteWayOfPayment", key);
    const route = useRouter();

    function selectAndGoToPrepare() {
        route.replace("/cart/prepareOrder");
    }

    function acceptCash() {
        wayOfPayment.value.type = wayOfPaymentConstant.CASH;
        deleteKeys();
        selectAndGoToPrepare();
    }

    function deleteKeys() {
        deleteWayOfPaymentKey("credit_id");
        deleteWayOfPaymentKey("initial_price");
        deleteWayOfPaymentKey("real_price");
        deleteWayOfPaymentKey("over_payment"); // add this one
    }


    function acceptCard() {
        wayOfPayment.value.type = wayOfPaymentConstant.CARD;
        deleteKeys();
        selectAndGoToPrepare();
    }

    function acceptInstallment() {
        wayOfPayment.value.type = wayOfPaymentConstant.INSTALLMENT;
        wayOfPayment.value.credit_id = credit.value.id;
        wayOfPayment.value.initial_price = installment.initialPayment;
        wayOfPayment.value.real_price = overallPrice.value;
        wayOfPayment.value.over_payment = installment.percentageOverPayment;
        wayOfPayment.value.name = mainCredit.value.name;
        selectAndGoToPrepare();
    }

    return {
        acceptCash: acceptCash,
        acceptCard: acceptCard,
        acceptInstallment: acceptInstallment,
    }
}