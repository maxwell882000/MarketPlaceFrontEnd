<template>
  <div class="modal-overlay-first">
    <div v-bind="$attrs" class="modal-second">
      <h6>{{ title }}</h6>
      <p>{{ description }}</p>
      <slot name="inputs"></slot>
      <slot name="buttons"></slot>
    </div>
  </div>
</template>

<script>

export default {
  inheritAttrs: false,
  props: {
    title: String,
    description: String,
    heightModal: undefined,
    widthModal: undefined,
  },
  components: {}
}
</script>

<style scoped>

.modal-overlay-first {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 200;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: #000000da;
}

.modal-second {
  text-align: center;
  background-color: white;
  z-index: 300;
  /*width: 100vw;*/
  border-radius: var(--borderRadius);
  padding: 20px 30px;
}

h6 {
  font-weight: 600;
  font-size: 16px;
  color: var(--dark);
  line-height: 19.36px;
  margin: 20px 0;
}

p {
  font-size: 16px;
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