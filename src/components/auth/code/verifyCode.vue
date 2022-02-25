<template>
  <ModalAuth waiting="code" title="Введите код"
             :description="'Введите код подтверждения, который мы отправили на номер ' + phone">
    <template #inputs>
      <OtpInput @on-change="setCode"></OtpInput>
      <ButtonForm @submit="submit" title="Отправить" :is-entered="isCodeEntered"></ButtonForm>
    </template>
  </ModalAuth>
</template>
<script>
import OtpInput from "@/components/helper/input/otpInput";
import ModalAuth from "@/components/modal/modalAuth";
import ButtonForm from "@/components/helper/button/buttonForm";

export default {
  components: {ButtonForm, ModalAuth, OtpInput},
  props: ['phone'],
  data() {
    return {
      code: "",
      isCodeEntered: false,
    }
  },
  watch: {
    code(newVal) {
      this.isCodeEntered = newVal.length === 6;
    }
  },
  methods: {
    setCode(value) {
      this.code = value;
    },
    submit() {
      this.$emit("codeSubmit", this.code);
    }
  },
}
</script>