<template>
  <ModalView
      v-model="isAgreement"
      @close-modal="close"
      style-modal="width: 32vw">
    <template #prefix>
      <span class="block bold text-center">Условия и положения</span>
      <div class="text-left">
        <h6>Поручительство, ответственность поручителя по кредиту</h6>
        <p class="text-sm">
          Поручительство – вид обеспечения исполнения обязательств по кредиту. Поручитель – человек, обязующийся перед
          банком в случае неисполнения обязательств, возложенных по кредиту на заемщика, выполнить их за него полностью
          или частично. Отношения между банком и поручителем (условия, сумма и срок) закрепляются договором
          поручительства. Чем больше сумма кредита, тем больше банк требует поручителей. Таким образом кредитная
          организация снижает риск невозврата ссуды.
        </p>
        <h6>Поручительство, ответственность поручителя по кредиту</h6>
        <p class="text-sm">
          Поручительство – вид обеспечения исполнения обязательств по кредиту. Поручитель – человек, обязующийся перед
          банком в случае неисполнения обязательств, возложенных по кредиту на заемщика, выполнить их за него полностью
          или частично. Отношения между банком и поручителем (условия, сумма и срок) закрепляются договором
          поручительства. Чем больше сумма кредита, тем больше банк требует поручителей. Таким образом кредитная
          организация снижает риск невозврата ссуды.
        </p>
      </div>
      <ButtonBlue @click="agree" title="Я прочитал и согласен"></ButtonBlue>
    </template>
  </ModalView>
</template>
<script setup>
import ModalView from "@/components/modal/modalView";
import ButtonBlue from "@/components/helper/button/buttonBlue";
import {useStore} from "vuex";
import {computed} from "vue";
import agreementAndPolicies from "@/constants/basket/agreementAndPolicies";

const store = useStore();
const isAgreement = computed(() => store.getters['registrationOrderModule/policies']);
const setAgreement = (val) => store.commit("registrationOrderModule/setPolicies", val);
const purchaseOrder = () => store.dispatch("registrationOrderModule/purchaseOrders");

// const setSuccess = computed(() => store.get)
function close() {
  setAgreement(agreementAndPolicies.NOT_CHOSEN);
}

function agree() {
  setAgreement(agreementAndPolicies.AGREE);
  purchaseOrder();
}
</script>