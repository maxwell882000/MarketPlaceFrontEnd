<template>
  <span v-if="category"
        @click="addCategory(category.slug)"
        class="text-link">
    {{ category.name }}
  </span>
  <slot></slot>
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