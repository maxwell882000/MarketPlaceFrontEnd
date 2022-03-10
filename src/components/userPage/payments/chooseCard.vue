<template>
  <empty-card></empty-card>
  <section class="border-st back-white p-3">
    <h5>Сохраненные карты</h5>
    <b-form-group class="w-30" v-slot="{ ariaDescribedby }">
      <input-radio :aria-describedby="ariaDescribedby" name="some-radios" value="A">
        <div class="d-flex justify-content-between align-items-center">
          <span class="text-sm">8600 49** **** 2299</span>
          <div class="pointer">
            <trash></trash>
          </div>
        </div>
      </input-radio>
    </b-form-group>
    <div class="d-flex text-link text-blue text-center align-items-end">
      <card-add></card-add>
      <span class="px-2">
      Добавить карту
    </span>
    </div>
  </section>
  <br>
  <insert-card></insert-card>
</template>
<script>
import EmptyCard from "@/components/userPage/payments/emptyCard";
import InputRadio from "@/components/helper/input/inputRadio";
import Trash from "@/components/icons/trash";
import CardAdd from "@/components/icons/card-add";
import InsertCard from "@/components/userPage/payments/insertCard";

export default {
  components: {InsertCard, CardAdd, Trash, InputRadio, EmptyCard}
}
</script>