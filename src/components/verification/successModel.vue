<template>
  <ModalView
      v-show="success"
      @closeModal="closeModal"
      style="width: 25rem"
      title="Отправленно"
      description="Ваши данные успешно отправленны">
    <template #prefix>
      <img src="@/assets/modal/accepted.png" alt="check sign">
    </template>
    <template #buttons>
      <router-link to="/cart/" class="remove-link" replace>
        <ButtonBlue class="w-60" title="Вернуться в корзину"></ButtonBlue>
      </router-link>
    </template>
  </ModalView>
</template>
<script setup>
import ModalView from "@/components/modal/modalView";
import ButtonBlue from "@/components/helper/button/buttonBlue";
import {useRouter} from "vue-router";
import {computed} from "vue";
import {useStore} from "vuex";

const route = useRouter();
const store = useStore();
const success = computed(() => store.getters['verificationModule/success']);

function closeModal() {
  route.replace({
    name: "basket"
  });
}

</script>