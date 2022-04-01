<template>
  <ModalView @close-modal="close()" style="width: 25%">
    <template #body>
      <v-wait :for="waiting">
        <template #waiting>
          <div>
            <!-- <Circle style="color: var(--blue)"></Circle> -->
          </div>
        </template>
        <Status />
        <slot name="inputs"></slot>
      </v-wait>
    </template>
  </ModalView>
</template>
<script>
import ModalView from "@/components/modal/modalView";
import { mapMutations, mapState } from "vuex";
// import Circle from "vue-loading-spinner/src/components/Circle";
import Status from "@/components/helper/status/status";

export default {
  props: ["waiting"],
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
  // components: {Status, ModalView, Circle}
  components: { Status, ModalView },
};
</script>