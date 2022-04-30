<template>
  <loader waiting="card_loaded">
    <empty-card v-if="isEmptyCard">
    </empty-card>
    <section v-else
             class="rounded-st bg-white p-3">
      <h5>Сохраненные карты</h5>
      <!--    <b-form-group class="w-30" v-slot="{ ariaDescribedby }">-->
      <!--      <input-radio  :aria-describedby="ariaDescribedby" name="some-radios" value="A">-->
      <div class="mb-2">
        <div :key="'plastic_card_pan_' + item.id" v-for="item in cards"
             class="d-flex justify-content-between align-items-center w-30">
          <span class="text-sm">{{ item.pan }}</span>
          <div @click="revokeCard(item.id)" class="pointer">
            <trash></trash>
          </div>
        </div>
      </div>

      <!--      </input-radio>-->
      <!--    </b-form-group>-->
      <router-link :to="{
        name: 'insert_card'
      }" class="remove-link d-flex text-link text-blue text-center align-items-end">
        <card-add></card-add>
        <span class="px-2">
               Добавить карту
          </span>
      </router-link>
    </section>
  </loader>
  <!--  <br>-->
  <!--  <insert-card></insert-card>-->
</template>
<script setup>
import EmptyCard from "@/components/userPage/payments/emptyCard";
// import InputRadio from "@/components/helper/input/inputRadio";
import Trash from "@/components/icons/trash";
import CardAdd from "@/components/icons/card-add";
import {computed} from "vue";
import {useStore} from "vuex";
import Loader from "@/components/loading/loader";

const store = useStore();
const isEmptyCard = computed(() => store.getters['plasticCardModule/isEmptyCard']);
const cards = computed(() => store.getters['plasticCardModule/cards']);
const revokeCard = (id) => store.dispatch("plasticCardModule/revokeCard", id);
</script>