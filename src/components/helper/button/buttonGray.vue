<template>
  <Button style="background-color: var(--gray100)">
    <span :class="titleClass" :style="titleStyle">
      {{ title }}
    </span>
  </Button>
</template>
<script>
import Button from "@/components/helper/button/button";

export default {
  name:'ButtonGray',
  components: {Button},
  props: {
    title: {},
    titleClass: String,
    titleStyle: {
      type: Object,
      default() {
        return {
          color: "var(--gray)"
        }
      }
    }
  }
}


</script>