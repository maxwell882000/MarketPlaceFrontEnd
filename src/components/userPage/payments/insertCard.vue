<template>
  <back-button title="Назад в оплату"></back-button>
  <section class="border-st back-white p-3">
    <div class="w-40">
      <h5> Привязка банковской карты</h5>
      <br>
      <div class="back-white p-4 shadow-box ">
        <InputBelowBorder class="w-100" :placeholder="'Номер карты'"/>
        <br>
        <div class="w-20">
          <input-below-border placeholder="ММ/ГГ"></input-below-border>
        </div>
      </div>
      <br>
      <span>Нажимая на кнопку «Привязать», вы соглашаетесь
      с   <span class="text-blue">   условиями привязки карты </span></span>

      <ButtonForm class="p-2"  title="Привязать"> </ButtonForm>
    </div>

  </section>
</template>
<script>
import InputBelowBorder from "@/components/helper/input/inputBelowBorder";
import ButtonForm from "@/components/helper/button/buttonForm";
import BackButton from "@/components/helper/button/backButton";

export default {
  components: {BackButton, ButtonForm, InputBelowBorder,}
}
</script>