<template>
  <ModalAuth waiting="login" v-show="isLogin" title="Вход">
    <template #inputs>
      <InputPhone v-model="phone" placeholder="Номер телефона"/>
      <div class="mt-2">
        <InputPassword v-model="password"/>
      </div>
      <ButtonForm title="Войти" :isEntered="isEntered()" @submit="login()"></ButtonForm>
      <div class="mt-2">
        <p @click="setRegister()" class="text-font text-link">
          Нет аккаунта ?
        </p>
        <p @click="setPassword()" class="text-font text-link">
          Забыли пароль?
        </p>
      </div>
    </template>
  </ModalAuth>
</template>
<script>
import InputPassword from "@/components/helper/input/inputPassword";
import ModalAuth from "@/components/modal/modalAuth";
import {mapActions, mapMutations, mapState} from "vuex";
import ButtonForm from "@/components/helper/button/buttonForm";
import InputPhone from "@/components/helper/input/inputPhone";

export default {
  components: {InputPhone, ButtonForm, ModalAuth, InputPassword},
  data() {
    return {
      phone: "",
      password: "",
      isPhoneEntered: false,
      isPasswordEntered: false,
    }
  },
  computed: {
    ...mapState({
      isLogin: state => state.authWindow.isLogin
    })
  },
  watch: {
    isLogin(val) {
      if (val) {
        this.password = "";
      }
    },
    // whenever question changes, this function will run
    phone(newVal) {
      this.isPhoneEntered = newVal !== "";
    },
    password(newVal) {
      this.isPasswordEntered = newVal !== "";
    }
  },
  methods: {
    ...mapActions({
      sendLogin: 'login',
    }),
    ...mapMutations({
      setRegister: "authWindow/setRegister",
      setPassword: "authWindow/setForget"
    }),
    async login() {
      let request = {
        phone: this.phone,
        password: this.password
      };
      await this.sendLogin(request);
    },
    isEntered() {
      return this.isPasswordEntered && this.isPhoneEntered;
    }
  }
}
</script>