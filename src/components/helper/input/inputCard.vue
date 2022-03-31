<template>
  <div class="bg-white p-4 shadow-box ">
    <InputBelowBorder @input="$emit('card-input', $event)" class="w-100" :placeholder="'Номер карты'"/>
    <br>
    <div class="w-30">
      <input-below-border class="w-100" @input="$emit('expiry-input', $event)" placeholder="ММ/ГГ"></input-below-border>
    </div>
  </div>
</template>
<script>
import InputBelowBorder from "@/components/helper/input/inputBelowBorder";

export default {
  components: {InputBelowBorder}
}
</script>