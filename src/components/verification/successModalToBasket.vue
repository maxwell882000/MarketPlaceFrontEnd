<template>
  <SuccessModel
      description="Ваши данные успешно отправленны"
      button-title="Вернуться в корзину"
      path-name="basket"
      success-show="successToBasket">
  </SuccessModel>
</template>
<script setup>
import SuccessModel from "@/components/verification/successModel";
</script>