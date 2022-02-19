<template>
  <ModalAuth title="Вход">
    <template #inputs>
      <Input v-model="phone" placeholder="Номер телефона"/>
      <InputPassword v-model="password"/>
      <ButtonBlue v-if="isEntered()" title="Войти"></ButtonBlue>
      <ButtonGray v-else @click="login()" title="Войти"></ButtonGray>
    </template>
  </ModalAuth>
</template>
<script>
import Input from "@/components/helper/input/input";
import InputPassword from "@/components/helper/input/inputPassword";
import ButtonGray from "@/components/helper/button/buttonGray";
import ButtonBlue from "@/components/helper/button/buttonBlue";
import ModalAuth from "@/components/modal/modalAuth";

export default {
  components: {ModalAuth, ButtonBlue, ButtonGray, InputPassword, Input},
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