<template>
  <VerifyCode @codeSubmit="codeSubmit" :phone="phone" v-show="isVerifyForget"></VerifyCode>
</template>
<script>
import VerifyCode from "@/components/auth/code/verifyCode";
import {mapActions, mapState} from "vuex";

export default {
  components: {VerifyCode},
  computed: {
    ...mapState({
      isVerifyForget: state => state.authWindow.isVerifyForget,
      phone: state => state.passwordModule.phone
    })
  },
  methods: {
    ...mapActions({
      verifyCode:'passwordModule/passwordVerify'
    }),
    codeSubmit(value) {
      this.verifyCode(value)
    }
  }
}
</script>