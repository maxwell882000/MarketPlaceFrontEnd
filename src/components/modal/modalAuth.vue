<template>
  <ModalView @close-modal="customClose ? customClose() : close()" style="width: 25%">
    <template #body>
      <loader :div-style="{height: 'max-content'}" :waiting="waiting">
        <Status/>
        <slot name="inputs"></slot>
      </loader>
    </template>
  </ModalView>
</template>
<script>
import ModalView from "@/components/modal/modalView";
import {mapMutations, mapState} from "vuex";
import Status from "@/components/helper/status/status";
import Loader from "@/components/loading/loader";

export default {
  props: ["waiting", "customClose"],
  computed: {
    ...mapState({
      loading: (state) => state.auth.loading,
    }),
  },
  methods: {
    ...mapMutations({
      close: "authWindow/close",
    }),
  },
  components: {Loader, Status, ModalView,},
};
</script>