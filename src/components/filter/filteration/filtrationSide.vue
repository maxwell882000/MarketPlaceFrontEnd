<template>
  <modal-filter @closeModal="closeModal" v-model="modal"></modal-filter>
  <b-col cols="12" class="d-block d-sm-block d-md-none ">
    <button @click="showModal" class="button-clear w-100 mb-3 text-right p-mobile">
          <span class="">
       <Filter></Filter> {{ $t("Фильтры") }}
    </span>
    </button>
  </b-col>
  <b-col cols="0" class="col-xl-3 col-lg-3 col-md-4 d-none d-sm-none d-md-block ml-r bg-white rounded-st p-4">
    <FiltrationHolder></FiltrationHolder>
  </b-col>
</template>

<script setup>
import FiltrationHolder from "@/components/filter/filteration/filterationHolder";
import Filter from "@/components/icons/filter";
import {ref} from "vue";
import ModalFilter from "@/components/filter/modal/modalFilter";

const modal = ref(false);

function showModal() {
  modal.value = true;
}

function closeModal() {
  console.log('CLOSEED');
  modal.value = false;
}
</script>
<style>
.custom-border-input {
  margin-top: 10px !important;
}

.inputs {
  margin: 0 !important;
}
</style>