<template>
  <VerifyCode
      :custom-close="close"
      v-show="show"
      @code-submit="submit"
      description="Введите код подтверждения">
  </VerifyCode>
</template>
<script setup>
import VerifyCode from "@/components/auth/code/verifyCode";
import {useStore} from "vuex";
import {computed} from "vue";
import {useRoute, useRouter} from "vue-router";

const store = useStore();
let show = computed(() => store.getters['plasticCardModule/showVerification']);
const close = () => store.commit("plasticCardModule/closeVerification");
const submitCard = (code) => store.dispatch("plasticCardModule/insertCard", code);
const openPolicies = () => store.commit("registrationOrderModule/openPolicies", true);
const route = useRoute();
const router = useRouter();

async function submit(code) {
  await submitCard(code);
  if (route.name !== "insert_card")
    openPolicies();
  else {
    router.back();
  }
}
</script>