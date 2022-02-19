<template>
  <ModalView>
    <template #inputs>
      <Input v-model="phone" placeholder="Номер телефона"/>
      <InputPassword v-model="password"/>
      <ButtonBlue v-if="isEntered()" title="Войти"></ButtonBlue>
      <ButtonGray v-else @click="login()" title="Войти"></ButtonGray>
    </template>
  </ModalView>
</template>
<script>
import ModalView from "@/components/modal/modalView";
import ButtonBlue from "@/components/helper/button/buttonBlue";
import InputPassword from "@/components/helper/input/inputPassword";
import ButtonGray from "@/components/helper/button/buttonGray";
import Input from "@/components/helper/input/input";

export default {
  components: {Input, ButtonGray, InputPassword, ButtonBlue, ModalView}
}
</script>