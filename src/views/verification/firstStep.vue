<template>
  <section class="bg-white p-3 rounded-st mb-3">
    <h6>Общая информация</h6>
    <b-row>
      <b-col cols="6">
        <InputValidation required :error="errorData[type.FIRST_NAME]"
                         v-model="userData[type.FIRST_NAME]"
                         placeholder="Имя*"/>
      </b-col>
      <b-col cols="6">
        <InputValidation :error="errorData[type.PNFL]"
                         v-model="userData[type.PNFL]"
                         placeholder="ПИНФЛ"/>
      </b-col>
      <b-col cols="6">
        <InputValidation :error="errorData[type.LAST_NAME]"
                         v-model="userData[type.LAST_NAME]"
                         placeholder="Фамилия*"/>
      </b-col>
      <b-col cols="6">
        <InputValidation :error="errorData[type.ADDITIONAL_PHONE]"
                         v-model="userData[type.ADDITIONAL_PHONE]"
                         placeholder="Доп. номер телефона*"/>
      </b-col>
      <b-col cols="6">
        <InputValidation :error="errorData[type.SERIES]"
                         v-model="userData[type.SERIES]"
                         placeholder="Серия паспорта*"/>
      </b-col>
      <b-col cols="6">
        <InputValidation type="date" :error="errorData[type.DATE_OF_BIRTH]"
                         v-model="userData[type.DATE_OF_BIRTH]"
                         placeholder="Дата рождения*"/>
      </b-col>
      <b-col cols="6">
        <dropdown-choose
            class="input-validation"
            label="Выберите пол"
            placeholder="Пол*"
            :error="errorData[type.SEX]"
            v-model="userData[type.SEX]"
            :items="sex"
        ></dropdown-choose>
      </b-col>
    </b-row>
  </section>
  <section class="bg-white p-3 rounded-st">
    <h6>У вас есть рассрочка в других местах в данный момент?</h6>
    <div class="d-flex w-30">
      <ButtonForm
          @click="isDept = true"
          class="mr-2"
          :is-entered="isDept || userData[type.DEPT_SUM]"
          :title-style="{ style: 'var(--dark)' }"
          title="Да"
      ></ButtonForm>
      <ButtonForm
          @click="isDept = false"
          :is-entered="!(isDept || userData[type.DEPT_SUM] )"
          :title-style="{ style: 'var(--dark)' }"
          title="Нет"
      ></ButtonForm>
    </div>
    <div v-show="isDept || userData[type.DEPT_SUM]" class="mt-4 w-40">
      <InputValidation :error="errorData[type.DEPT_SUM]" v-model="userData[type.DEPT_SUM]"
                       placeholder="Сумма рассрочки"/>
    </div>
  </section>
  <router-link :to="`/verification/${nextPage}`" replace>
    <ButtonBlue @click="goNextPage" class="w-20 mb-3 py-2" title="Далее"></ButtonBlue>
  </router-link>
</template>
<script setup>
import ButtonForm from "@/components/helper/button/buttonForm";
import ButtonBlue from "@/components/helper/button/buttonBlue";
import {computed, ref} from "vue";
import {useStore} from "vuex";
import verificationConstant from "@/constants/verification/verificationConstant";
import InputValidation from "@/components/helper/input/inputValidation";
import validation from "@/mixins/validation";
import DropdownChoose from "@/components/helper/dropdown/dropdownChoose";
import sexItems from "@/constants/helper/dropDown/sexItems";

const isDept = ref(false);
const nextPage = ref(1);
const store = useStore();
const userData = computed(() => store.getters['verificationModule/userData']);
const errorData = computed(() => store.getters['verificationModule/errorData']);
const validate = () => store.dispatch('verificationModule/validation');
const type = verificationConstant;
const sex = sexItems;

function goNextPage() {
  validate();
  if (isDept.value) {
    validation(userData.value, errorData.value, type.DEPT_SUM, "Если вы выбрали 'ДА', то cумма рассрочки");
  }
  if (!Object.entries(errorData.value).length)
    nextPage.value = 2;
}

</script>

<style scoped>
.input-validation {
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}
</style>