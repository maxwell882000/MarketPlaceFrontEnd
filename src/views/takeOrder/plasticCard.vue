<template>
  <section class="container">
    <back-button title="Назад в оформление"></back-button>
    <h4>Предоставьте карточные данные</h4>
    <div class="back-white border-st p-4">
      <div class="w-60 text-sm">
              <span class="mb-4">
        Предоставьте реквизиты банковской карты, на которую переводится ваш доход,
        и мы будем использовать ее для автоматического удержания ваших платежей в рассрочку.
      </span>
        <br>
        <br>
        <span class="mb-4">
        Мы мгновенно вычтем ваш первый платеж в размере 319 875 сум.
        Пожалуйста, убедитесь что у вас есть необходимые средства.
      </span>
        <br>
        <br>
        <span class="text-blue">К оплате принимаются только UZCARD и HUMO</span>
        <br>
        <br>
        <span class="bold">Ваша карта</span>
        <br>
        <br>
        <div class="w-60 mb-3">
          <input-card></input-card>
        </div>
        <InputSelect class="mb-3">
          <div class="text-sm w-50">
            Запомнить карту. Это безопасно. Сохраняя карту, вы соглашаетесь с
            <span class="text-blue">условиями привязки карты</span>
          </div>

        </InputSelect>
        <div class="d-flex align-items-center">
          <shields class="mr-1"></shields>
          <span>Безопасность гарантирована</span>
        </div>
      </div>
    </div>
    <ButtonBlue class="p-2 w-20 mb-3" title="Подтвердить" :title-style="{color: 'white'}"></ButtonBlue>
  </section>
</template>
<script>
import BackButton from "@/components/helper/button/backButton";
import InputSelect from "@/components/helper/input/inputSelect";
import Shields from "@/components/icons/shields";
import InputCard from "@/components/helper/input/inputCard";
import ButtonBlue from "@/components/helper/button/buttonBlue";

export default {
  components: {ButtonBlue, InputCard, Shields, InputSelect, BackButton}
}
</script>