<template>
  <empty-page
        link="/"
        title="В корзине пока ничего нет" image="Basket.png"
              desc="Вы можете начать покупки с главной страницы или воспользоваться поиском,
                  если ищете что-то конкретное."
              button-text="Перейти в каталог"
  ></empty-page>
</template>
<script>
import EmptyPage from "@/components/helper/empty/emptyPage";

export default {
  components: {EmptyPage},
  inheritAttrs: false,
  props: ['image', 'desc', 'buttonText', 'link']
}
</script>