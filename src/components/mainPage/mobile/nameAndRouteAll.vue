<template>
  <div class="cat-mob d-flex justify-content-between align-items-center ">
    <h5 class="text-md mb-3"> {{ title }}</h5>
    <router-link v-if="to"
                 :to="to || ''" class="remove-link">
      <span>
              Все
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "nameAndRouteAll"
}
</script>
<script setup>
// eslint-disable-next-line no-unused-vars,no-undef
const props = defineProps({
  title: String,
  to: String,
})
</script>

<style scoped>

</style>