<template>

  <h6>Куда доставить заказ?</h6>
  <span class="text-sm text-gray">Укажите адрес на карте или используйте поиск</span>
  <div style="position: relative">
    <Input placeholder="Адрес доставки">
      <template #suffix>
        <location></location>
      </template>
    </Input>
    <div class="border-st back-white p-2 w-100 shadow mt-1"
         style="position: absolute; z-index: 100;">
      <button class="button-clear w-100 text-left">Ташкент, ул. Амира Темура 25</button>
    </div>
  </div>
  <Input placeholder="Улица"></Input>
  <b-row>
    <b-col cols="6">
      <Input class="w-100" placeholder="Дом"></Input>
    </b-col>
    <b-col cols="6">
      <Input class="w-100" placeholder="Подъезд"></Input>
    </b-col>
    <b-col cols="6">
      <Input class="w-100" placeholder="Этаж"></Input>
    </b-col>
    <b-col cols="6">
      <Input class="w-100" placeholder="Квартира"></Input>
    </b-col>
    <b-col cols="12">
      <TextArea rows="4" class="my-3" placeholder="Комментарий для курьера"></TextArea>
    </b-col>
  </b-row>
  <ButtonForm class="p-2" title="Привезти сюда"></ButtonForm>
</template>
<script>
import Location from "@/components/icons/location";
import ButtonForm from "@/components/helper/button/buttonForm";
import Input from "@/components/helper/input/input";
import TextArea from "@/components/helper/text-area/textArea";


export default {
  components: {Input, ButtonForm, TextArea, Location}
}
</script>
<style scoped>
.border-input {
  margin-top: 5px;
}

.button-blue {
  border: none;
  background-color: transparent;
}
</style>
