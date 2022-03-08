<template>
  <back-button title="Назад в оплату"></back-button>
  <section class="border-st back-white p-3">
    <div class="w-40">
      <h5> Привязка банковской карты</h5>
      <br>
      <input-card></input-card>
      <br>
      <span>Нажимая на кнопку «Привязать», вы соглашаетесь
      с   <span class="text-blue">   условиями привязки карты </span></span>
      <ButtonForm class="p-2" title="Привязать"></ButtonForm>
    </div>
  </section>
</template>
<script>
import ButtonForm from "@/components/helper/button/buttonForm";
import BackButton from "@/components/helper/button/backButton";
import InputCard from "@/components/helper/input/inputCard";

export default {

  components: {InputCard, BackButton, ButtonForm,}
}
</script>
<style scoped>

</style>