<template>
  <verify-card-modal></verify-card-modal>
  <back-button title="Назад в оплату"></back-button>
  <section class="rounded-st bg-white p-3">
    <!--    <div class="w-40">-->
    <b-row>
      <b-col cols="8" class="col-xl-4 col-lg-5 col-md-6 col-sm-7">
        <h5> Привязка банковской карты</h5>
        <br>
        <input-card
            :error_card="selectedCard.card_error"
            :error_expiry="selectedCard.expiry_error"
            @card-input="setCardNumber"
            @expiry-input="setExpiry">
        </input-card>
        <Error :error="error"></Error>
        <br>
        <span>Нажимая на кнопку «Привязать», вы соглашаетесь
      с   <span class="text-blue">   условиями привязки карты </span></span>
        <ButtonForm :is-entered="isEntered()"
                    class="p-2"
                    @submit="validateCard()"
                    title="Привязать"></ButtonForm>
      </b-col>
    </b-row>

    <!--    </div>-->
  </section>
</template>
<script setup>
import ButtonForm from "@/components/helper/button/buttonForm";
import BackButton from "@/components/helper/button/backButton";
import InputCard from "@/components/helper/input/inputCard";
import usePlastic from "@/components/helper/input/setup/usePlastic";
import Error from "@/components/helper/error/error";
import VerifyCardModal from "@/components/plasticCard/verifyCardModal";

function isEntered() {
  return selectedCard.value.card_number && selectedCard.value.expiry;
}

const {selectedCard, validateCard, error, setCardNumber, setExpiry} = usePlastic();
</script>
<style scoped>

</style>