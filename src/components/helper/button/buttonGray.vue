<template>
  <Button style="background-color: var(--gray100)">
    <span style="color: var(--gray)">
      {{ title }}
    </span>
  </Button>
</template>
<script>
import Button from "@/components/helper/button/button";

export default {
  components: {Button},
  props: ['title']
}


</script>