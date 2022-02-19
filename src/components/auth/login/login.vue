<template>
  <ModalView title="Вход" style="width: 25%">
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
import Input from "@/components/helper/input/input";
import InputPassword from "@/components/helper/input/inputPassword";
import ButtonGray from "@/components/helper/button/buttonGray";
import ButtonBlue from "@/components/helper/button/buttonBlue";

export default {
  components: {ButtonBlue, ButtonGray, InputPassword, Input, ModalView},
  data() {
    return {
      phone: "",
      password: "",
      isPhoneEntered: false,
      isPasswordEntered: false,
    }
  },
  watch: {
    // whenever question changes, this function will run
    phone(newVal) {
      this.isPhoneEntered = newVal !== "";
    },
    password(newVal) {
      this.isPasswordEntered = newVal !== "";
    }
  },
  methods: {
    login() {
      console.log(process.env.VUE_APP_TITLE);
    },
    isEntered() {
      return this.isPasswordEntered && this.isPhoneEntered;
    }
  }
}
</script>