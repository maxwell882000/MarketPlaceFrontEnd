<template>
  <ModalView
      style="width: 30vw"

      @close-modal="close()"
      v-show="showSuccess"
      title="Успешно оплачено"
      :description="showSuccess">
    <template #prefix>
      <img src="@/assets/modal/accepted.png" alt="check sign">
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
const showSuccess = computed(() => store.getters['purchaseModule/successModalView']);
const close = () => store.commit('purchaseModule/setSuccessModalView', null);
</script>