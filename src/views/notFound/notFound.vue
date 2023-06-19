<template>
  <empty-page
      v-if="!exists"
      :button-text="$t('На главную')"
      :desc="$t('На странице введуться технические работы. Спасибо за ваше понимание !')"
      link="/" image="SearchNotFound.png"
      :title="$t('Технические работы.')"></empty-page>
</template>

<script>
import EmptyPage from "@/components/helper/empty/emptyPage.vue";

export default {
  name: "notFound",
  components: {EmptyPage}
}
</script>

<style scoped>

</style>