<template>
  <section class="back-white p-3 border-st mb-3">
    <h6>Общая информация</h6>
    <b-row>
      <b-col cols="6">
        <Input placeholder="Имя*"/>
      </b-col>
      <b-col cols="6">
        <Input placeholder="ПИНФЛ"/>
      </b-col>
      <b-col cols="6">
        <Input placeholder="Фамилия*"/>
      </b-col>
      <b-col cols="6">
        <Input placeholder="Доп. номер телефона*"/>
      </b-col>
      <b-col cols="6">
        <Input placeholder="Серия паспорта*"/>
      </b-col>
      <b-col cols="6">
        <Input placeholder="Дата рождения*"/>
      </b-col>
      <b-col cols="6">
        <Input type="date" placeholder="Дата рождения*"/>
      </b-col>
    </b-row>
  </section>
  <section class="back-white p-3 border-st ">
    <h6>У вас есть рассрочка в других местах в данный момент?</h6>
    <div class="d-flex w-30">
      <ButtonForm class=" mr-2" :title-style="{style:'var(--dark)'}" title="Да"></ButtonForm>
      <ButtonForm class="" :title-style="{style:'var(--dark)'}" title="Нет"></ButtonForm>
    </div>
    <div class="w-40">
      <Input placeholder="Сумма рассрочки"/>
    </div>
  </section>
  <router-link to="/verification/2" replace>
    <ButtonBlue class="w-20 mb-3 py-2" title="Далее"></ButtonBlue>
  </router-link>
</template>
<script>
import Input from "@/components/helper/input/input";
import ButtonForm from "@/components/helper/button/buttonForm";
import ButtonBlue from "@/components/helper/button/buttonBlue";

export default {
  components: {ButtonBlue, ButtonForm, Input}
}
</script>