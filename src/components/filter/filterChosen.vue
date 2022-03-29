<template>
  <div v-if=" Object.keys(showChosen).length !== 0" class="margin_wrap mb-2">
    <div :key="'chosen_object_keies' + index"
         v-for="(item, index) in Object.entries(showChosen)"
         class="mb-1 bg-blue text-center h-max border-lg text-white w-max p-2 text-sm">
      <span class="px-1">{{ item[1] }}</span>
      <b-icon @click="removeChosen(item[0])" class="pointer" icon="x-circle-fill"></b-icon>
    </div>
    <div @click="allRemove" class="pointer bg-gray text-center h-max border-lg w-max p-2 text-sm">
      <span class="px-1">Очистить всё </span>
      <b-icon class="text-gray300 pointer" icon="x-circle-fill"></b-icon>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      showChosen: "productFilterByModule/showChosen"
    })
  }, methods: {
    ...mapActions({
      removeChosen: "productFilterByModule/removeAndAddToDeleteFilter",
      allRemove: "productFilterByModule/removeAllChosen"
    })
  }
}
</script>
<style>
.margin_wrap {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.2rem;
}

</style>