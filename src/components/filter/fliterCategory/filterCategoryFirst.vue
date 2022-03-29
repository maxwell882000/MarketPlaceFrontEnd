<template>
  <span @click="addCategory(category.slug)" class="text-link">{{ category.name }}</span>
</template>
<script>
import {mapActions} from "vuex";

export default {
  props: {
    category: Object,
  },
  methods: {
    ...mapActions({
      addCategory: "productFilterByModule/addCategory"
    }),
  }
}
</script>