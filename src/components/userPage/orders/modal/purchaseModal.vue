<template>
  <ModalView @close-modal="close()" v-show="showPlastic" title="Выберите способ оплаты">
    <template #body>
      <loader waiting="card_loaded">
        <input-radio :key="'plastic_card_selected_' + item.id"
                     v-for="item in plastic"
                     :value="item.id"
                     name="plastic_card"
                     v-model="selectedPlastic">
          <span class="text-sm">{{ item.pan }}</span>
        </input-radio>
        <button @click="goToPlastic" class="text-button d-flex text-sm align-items-center text-blue">
          <b-icon icon="plus" size="lg"></b-icon>
          <span>Добавить карту</span>
        </button>
      </loader>
    </template>
    <template #buttons>
      <ButtonForm @submit="pay" :is-entered="isEntered()" title="Отплатить"></ButtonForm>
    </template>
  </ModalView>
</template>
<script setup>
import ModalView from "@/components/modal/modalView";
import {useStore} from "vuex";
import {computed, ref} from "vue";
import InputRadio from "@/components/helper/input/inputRadio";
import Loader from "@/components/loading/loader";
import ButtonForm from "@/components/helper/button/buttonForm";
import {useRouter} from "vue-router";

const selectedPlastic = ref(null);

function isEntered() {
  return selectedPlastic.value;
}

const showPlastic = computed(() => store.getters['purchaseModule/chosePlasticCard']);
const store = useStore();
const plastic = computed(() => store.getters['plasticCardModule/cards']);
console.log(plastic);
const close = () => store.dispatch("purchaseModule/closeModal");
const pay = () => store.dispatch("purchaseModule/paidForMonth", selectedPlastic.value);
const route = useRouter();
function goToPlastic() {
  close();
  route.push({
    name: "credit"
  })
}
</script>