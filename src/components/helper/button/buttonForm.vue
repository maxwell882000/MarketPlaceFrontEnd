<template>
  <ButtonBlue v-if="isEntered" @click="$emit('submit')" :title="title"></ButtonBlue>
  <ButtonGray v-else  @click="$emit('not-submit')" :title-style="titleStyle" :title="title"></ButtonGray>
</template>
<script>
import ButtonBlue from "@/components/helper/button/buttonBlue";
import ButtonGray from "@/components/helper/button/buttonGray";

export default {
  props: ['title', 'isEntered', 'titleStyle'],
  components: {ButtonGray, ButtonBlue}
}
</script>