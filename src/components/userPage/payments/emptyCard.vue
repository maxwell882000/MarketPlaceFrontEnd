<template>
  <empty-base image="card-pos.png" title="У вас нет сохраненных карт"
              desc="Добавьте карту, чтобы оплачивать покупки и рассрочку">
    <button-blue class="p-2" style="width: max-content" title="Добавить документы"></button-blue>
  </empty-base>
</template>
<script>
import EmptyBase from "@/components/helper/empty/emptyBase";
import ButtonBlue from "@/components/helper/button/buttonBlue";

export default {
  components: {ButtonBlue, EmptyBase}
}
</script>