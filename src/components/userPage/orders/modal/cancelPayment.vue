<template>
  <ModalView
      v-show="show"
      @close-modal="()=> $emit('closeModal')"
      title="Заявка на отмену заказа">
    <template #body>
      <input-radio :key="'reasons_to_cancel_' + item.id"
                   v-for="item in reasons"
                   v-model="modal"
                   class="text-left"
                   :value="item"
                   name="cancel_order">
        <div class="d-flex justify-content-start">
          <span class="text-dark text-left">{{ item.text }}</span>
        </div>
      </input-radio>
      <TextArea
          placeholder="Опишите проблему"
          v-show="modal.id === 5" v-model="modal.value"></TextArea>
    </template>
    <template #buttons>
      <ButtonGray v-show="modal.id >= 0"
                  @click="() => $emit('submitReason', modal)"
                  :title-style="{color:'var(--red)'}"
                  title="Подтвердить отмену"></ButtonGray>
    </template>
  </ModalView>
</template>
<script setup>
import ModalView from "@/components/modal/modalView";
import InputRadio from "@/components/helper/input/inputRadio";
import {ref} from "vue";
import TextArea from "@/components/helper/text-area/textArea";
import ButtonGray from "@/components/helper/button/buttonGray";

// eslint-disable-next-line no-unused-vars,no-undef
const props = defineProps({
  purchase: Object,
  show: Boolean,
});
const modal = ref({});
// eslint-disable-next-line no-undef
defineEmits(['submitReason', 'closeModal']);

const reasons = [
  {
    id: 0,
    text: "Заказ размещен по ошибке"
  },
  {
    id: 1,
    text: "Неправильный размер или цвет"
  },
  {
    id: 2,
    text: "Указан неверный адрес"
  },
  {
    id: 3,
    text: "Неправильное понимание описания продукта"
  },
  {
    id: 4,
    text: "Передумал"
  },
  {
    id: 5,
    text: "Другое"
  },
];
</script>