<template>
  <ModalView
      style="width: 30vw"
      @close-modal="close()"
      v-show="showError"
      title="Произошла ошибка!"
      :description="showError">
    <template #prefix>
      <img src="@/assets/modal/error.png" alt="check sign">
    </template>
    <template #buttons>
      <ButtonBlue
          @click="close()"
          title="Понятно"></ButtonBlue>
    </template>
  </ModalView>
</template>
<script setup>
import ModalView from "@/components/modal/modalView";
import ButtonBlue from "@/components/helper/button/buttonBlue";
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore();
const showError = computed(() => store.getters['purchaseModule/errorModalView']);
const close = () => store.commit("purchaseModule/setErrorModalView", null);
</script>