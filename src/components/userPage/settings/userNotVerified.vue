<template>
  <div
      class="buyshop-card d-flex justify-content-between w-100 align-items-center  flex-wrap flex-sm-wrap flex-md-nowrap">
    <div class="d-flex align-items-start mb-3">
      <div style="margin-right: 1.286rem">
        <b-avatar :src="user.avatar" size="72"></b-avatar>
      </div>
      <div>
        <div style="padding-top: 0.857rem"></div>
        <h6 class="text-600 p-0 m-0" style="font-size: 1.143rem">{{ user.name }}</h6>
        <span :class="user.user_credit ? 'text-green' : 'text-red' ">{{
            user.user_credit ? $t("Верифицирован") : $t("Не верефицированный")
          }}</span>
        <router-link :to="{name:'start_verify'}" style="all: unset">
          <ButtonVialet :title="'Верифицировать'"></ButtonVialet>
        </router-link>
      </div>
    </div>
    <button class=" button-clear d-flex justify-content-between btn-link-new" @click="$emit('edit-profile')">
      <span class="pr-2">{{ $t("Редактировать профиль") }}</span>
      <span class="bi-chevron-right"></span>
    </button>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
import ButtonVialet from "@/components/helper/button/buttonVialet";

// eslint-disable-next-line no-undef
defineProps({
  user: Object
})
</script>

<style scoped>
.btn-link-new {
  display: flex;
  justify-content: space-between;
  color: var(--gray);
  cursor: pointer;
  text-underline: none;
}

@media (max-width: 767px) {
  .btn-link-new {
    width: 100%;
  }
}

.btn-link-new:hover {
  background-color: transparent;
}
</style>