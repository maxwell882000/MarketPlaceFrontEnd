<template>
  <ModalAuth v-show="isPassword" title="Вход">
    <template #inputs>
      <Input v-model="phone" placeholder="Номер телефона"/>
      <ButtonForm title="Получить код" :is-entered="isEntered()"></ButtonForm>
    </template>
  </ModalAuth>
</template>
<script>
import Input from "@/components/helper/input/input";
import ModalAuth from "@/components/modal/modalAuth";
import {mapMutations, mapState} from "vuex";
import ButtonForm from "@/components/helper/button/buttonForm";

export default {
  components: {ButtonForm, ModalAuth, Input},
  data() {
    return {
      phone: "",
      isPhoneEntered: false,
    }
  },
  computed: {
    ...mapState({
      isPassword: state => state.authWindow.isForgetPassword
    })
  },
  watch: {
    // whenever question changes, this function will run
    phone(newVal) {
      this.isPhoneEntered = newVal !== "";
    },
  },
  methods: {
    ...mapMutations({
      setRegister: "authWindow/setRegister"
    }),
    isEntered() {
      return this.isPhoneEntered;
    }
  }
}
</script>