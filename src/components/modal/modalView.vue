<template>
  <modal-base>
    <div class="left-corner">
      <b-icon @click="$emit('closeModal')" style="cursor: pointer; color: var(--gray300)" icon="x"
              font-scale="1.7"></b-icon>
    </div>
    <slot name="prefix"></slot>
    <h5 v-if="title">{{ title }}</h5>
    <p v-if="description" class="text-font">{{ description }}</p>
    <slot name="body"></slot>
    <slot name="buttons"></slot>
  </modal-base>
</template>

<script>

import ModalBase from "@/components/modal/modalBase";

export default {
  props: {
    title: String,
    description: String,
    heightModal: undefined,
    widthModal: undefined,
  },
  components: {ModalBase}
}
</script>

<style scoped>
.left-corner {
  display: flex;
  justify-content: flex-end;
  margin-bottom: calc(-0.9 * var(--marinTop));
}
h5 {
  font-weight: 600;
  font-size: 16px;
  color: var(--dark);
  line-height: 19.36px;
  margin: 20px 0;
}

p {
  font-size: 14px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}

</style>