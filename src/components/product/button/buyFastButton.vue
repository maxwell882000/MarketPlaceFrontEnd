<template>
  <div class="w-100  buy-now">
    <button @click="fixClicking" class="w-100">{{ $t("Купить сразу") }}</button>
  </div>
</template>

<script setup>
import usePay from "@/components/product/button/setup/usePay";
import {ref} from "vue";

const isClickable = ref(true);

const {buyImmediately} = usePay("setShowCredit");

async function fixClicking() {
  if (isClickable.value) {
    isClickable.value = false;
    await buyImmediately();
    isClickable.value = true;
  }
}
</script>
<style scoped>

</style>