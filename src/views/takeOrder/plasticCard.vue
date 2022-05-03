<template>
  <verify-card-modal></verify-card-modal>
  <loader waiting="insert_card_loaded">
    <section class="container">
      <back-button title="Назад в оформление"></back-button>
      <h4>Предоставьте карточные данные</h4>
      <div class="bg-white rounded-st p-4">
        <b-row class="text-sm">
          <b-col cols="12" class="col-xl-4 col-lg-5 col-md-6 col-sm-12">
            <div v-show="type.INSTALLMENT === wayOfPayment.type">
          <span class="mb-4">
            Предоставьте реквизиты банковской карты, на которую переводится ваш доход,
              и мы будем использовать ее для автоматического удержания ваших платежей в рассрочку.
             </span>
              <br>
              <br>
              <span class="mb-4">
        Мы мгновенно вычтем ваш первый платеж в размере {{ wayOfPayment.initial_price }} сум.
        Пожалуйста, убедитесь что у вас есть необходимые средства.
          </span>
              <br>
              <br>
            </div>
            <span class="text-blue">К оплате принимаются только UZCARD и HUMO</span>
            <br>
            <br>
            <div v-show="cards.length !==0">
              <span class="bold">Ваша карта</span>
              <div class="d-flex overflow-scroll">
                <div @click="setSelectedCard(item)" :key="'plastic_card_insert_' + item.id" v-for="item in cards"
                     class="mini-card" :class="item.id === selectedCard.id && 'active-card'">
                  <plastic-card-item-mini :card="item"></plastic-card-item-mini>
                </div>
                <!--           can be clicked only if it was not selected before
                                if it was, do nothing not to clean entered info-->
                <div @click="selectedCard.id === -1 ? ()=>{} : setSelectedCard({
              id: -1,
              card_number:'',
              expiry: ''})" class="mini-card" :class="selectedCard.id === -1 && 'active-card'">
                  <div
                      class="d-flex flex-column align-items-center justify-content-center p-1 back-gray h-100 w-100 rounded-st">
                    <card-add style="stroke: var(--dark)"></card-add>
                    <span class="text-sm">Новая карта</span>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="selectedCard.id === -1" class="selected-card">
              <input-card
                  :error_card="selectedCard.card_error"
                  :error_expiry="selectedCard.expiry_error"
                  @card-input="setCardNumber"
                  @expiry-input="setExpiry"
                  class="w-100 h-100">
              </input-card>
            </div>
            <div v-else class="selected-card">
              <plastic-card-item :card="selectedCard"></plastic-card-item>
            </div>
            <Error :error="error"></Error>
            <InputSelect v-model="checked" class="my-2">
              <div class="text-sm ">
                Запомнить карту. Это безопасно. Сохраняя карту, вы соглашаетесь с
                <span class="text-blue">условиями привязки карты</span>
              </div>
            </InputSelect>
            <div class="d-flex align-items-center">
              <shields class="mr-1"></shields>
              <span>Безопасность гарантирована</span>
            </div>
            <Error :error="errorCheck"></Error>
          </b-col>
        </b-row>
      </div>
      <ButtonBlue
          class="p-2 w-20 mb-3"
          title="Подтвердить"
          @click="validate"
          :title-style="{color: 'white'}">
      </ButtonBlue>
    </section>
  </loader>
</template>
<script setup>
import BackButton from "@/components/helper/button/backButton";
import InputSelect from "@/components/helper/input/inputSelect";
import Shields from "@/components/icons/shields";
import InputCard from "@/components/helper/input/inputCard";
import PlasticCardItem from "@/components/plasticCard/plasticCardItem";
import PlasticCardItemMini from "@/components/plasticCard/plasticCardItemMini";
import CardAdd from "@/components/icons/card-add";
import wayOfPaymentConstant from "@/constants/payment/wayOfPaymentConstant";
import {computed, ref} from "vue";
import {useStore} from "vuex";
import Loader from "@/components/loading/loader";
import Error from "@/components/helper/error/error";
import ButtonBlue from "@/components/helper/button/buttonBlue";
import VerifyCardModal from "@/components/plasticCard/verifyCardModal";
import usePlastic from "@/components/helper/input/setup/usePlastic";

const type = wayOfPaymentConstant;
const store = useStore();
const wayOfPayment = computed(() => store.getters['registrationOrderModule/wayOfPayment']);
const cards = computed(() => store.getters['plasticCardModule/cards']);
const setSelectedCard = (val) => store.commit("plasticCardModule/setSelectedCard", val);
const errorCheck = ref("");
const checked = ref(false);
const {selectedCard, setCardNumber, setExpiry, validateCard, error} = usePlastic();

function validate() {
  console.log("CLICKED");
  console.log(checked.value);
  if (!checked.value) {
    errorCheck.value = "Необходима принять условия";
  } else {
    errorCheck.value = "";
  }
  if (!errorCheck.value) {
    validateCard();
  }
}
</script>
<style>
.mini-card {
  min-width: 7rem;
  height: 5rem;
  margin: 0.4rem 0.2rem 0.4rem 0;
  font-size: 8px;
  cursor: pointer;
  font-weight: 400;
  padding: 0.25rem;
}

.active-card {
  border-radius: var(--borderRadius);
  border: 1px solid var(--blue)

}

.selected-card {
  /*width: 20rem;*/
  height: 12rem;
  border-radius: var(--borderRadius);
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
}
</style>