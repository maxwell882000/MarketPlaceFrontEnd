<template>
  <transition name="modal-fade">
    <div class="modal-overlay-first">
      <div v-bind="$attrs" class="modal-second" @click.stop>
        <div class="left-corner">
          <b-icon  @click="$emit('closeModal')" style="cursor: pointer; color: var(--gray300)" icon="x"
                  font-scale="1.7"></b-icon>
        </div>
        <h5 v-if="title">{{ title }}</h5>
        <p v-if="description" class="text-font">{{ description }}</p>
        <slot name="body"></slot>
        <slot name="buttons"></slot>
      </div>
    </div>
  </transition>
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
.left-corner {
  display: flex;
  justify-content: flex-end;
  margin-bottom: calc( -0.9* var(--marinTop));
}

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
  padding: 15px 15px;
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

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>