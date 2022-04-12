<template>
  <ModalView
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

const route = useRouter();

function closeModal() {
  route.replace({
    name: "basket"
  });
}

</script>