<template>
  <div class="p-mobile mob-home-container py-4 mt-2">
    <name-and-route-all title="Хит продаж"></name-and-route-all>
    <sales-roll :products="hit_products"></sales-roll>
  </div>
</template>

<script setup>
import NameAndRouteAll from "@/components/mainPage/mobile/nameAndRouteAll";
import SalesRoll from "@/components/shared/SalesRoll";
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore();
const hit_products = computed(() => store.getters['mainModule/hit_products']);
</script>

<style scoped>

</style>