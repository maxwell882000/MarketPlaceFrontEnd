<template>
  <section class="container">
    <back-button title="Назад в оформление"></back-button>
    <h4>Предоставьте карточные данные</h4>
    <div class="bg-white rounded-st p-4">
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
        <div class="d-flex">
          <div class="mini-card ">
            <plastic-card-item-mini></plastic-card-item-mini>
          </div>
          <div class="mini-card ">
            <div
                class="d-flex flex-column align-items-center justify-content-center p-1 back-gray h-100 w-100 rounded-st">
              <card-add style="stroke: var(--dark)"></card-add>
              <span class="text-sm">Новая карта</span>
            </div>
          </div>
        </div>
        <div class="selected-card">
          <input-card class="w-100 h-100"></input-card>
        </div>
        <div class="selected-card">
          <plastic-card-item></plastic-card-item>
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
import PlasticCardItem from "@/components/plasticCard/plasticCardItem";
import PlasticCardItemMini from "@/components/plasticCard/plasticCardItemMini";
import CardAdd from "@/components/icons/card-add";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: {CardAdd, PlasticCardItemMini, PlasticCardItem, ButtonBlue, InputCard, Shields, InputSelect, BackButton}
}
</script>
<style>
.mini-card {
  width: 8rem;
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
  width: 20rem;
  height: 12rem;
  border-radius: var(--borderRadius);
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
}
</style>