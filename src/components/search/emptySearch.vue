<template>
  <empty-page
      link="/"
      title="Этого мы не нашли" image="SearchNotFound.png"
      desc="Попробуйте написать название товара по-другому или сократить запрос. Убедитесь, что название бренда и модели написано правильно."
      button-text="На главную"
  ></empty-page>
</template>
<script>
import EmptyPage from "@/components/helper/empty/emptyPage";

export default {
  components: {EmptyPage}
}
</script>