<template>
  <VerifyCode
      :custom-close="close"
      v-show="show"
      @code-submit="submitCard"
      description="Введите код подтверждения">

  </VerifyCode>
</template>
<script setup>
import VerifyCode from "@/components/auth/code/verifyCode";
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore();
const show = computed(() => store.getters['plasticCardModule/showVerification']);
const close = () => store.commit("plasticCardModule/closeVerification");
const submitCard = (code) => store.dispatch("plasticCardModule/insertCard", code);
</script>