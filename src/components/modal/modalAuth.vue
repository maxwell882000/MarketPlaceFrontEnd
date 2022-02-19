<template>
  <ModalView style="width: 25%">
    <template #inputs>
      <slot name="inputs"></slot>
    </template>
  </ModalView>
</template>
<script>
import ModalView from "@/components/modal/modalView";

export default {
  components: {ModalView}
}
</script>