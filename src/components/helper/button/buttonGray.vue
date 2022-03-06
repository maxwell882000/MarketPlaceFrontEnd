<template>
  <Button style="background-color: var(--gray100)">
    <span :style="titleStyle">
      {{ title }}
    </span>
  </Button>
</template>
<script>
import Button from "@/components/helper/button/button";

export default {
  components: {Button},
  props: {
    title: {},
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