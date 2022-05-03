<template>
  <VueFinalModal name="modal-fade">
    <div class="modal-overlay-first">
      <b-row class="justify-content-center w-100">
        <b-col cols="12" class="col-xl-4 col-lg-5 col-md-6 col-sm-12">
          <div :class="classModal" :style="styleModal" class="modal-second" @click.stop>
            <slot></slot>
          </div>
        </b-col>
      </b-row>
    </div>
  </VueFinalModal>
</template>

<script setup>
import {VueFinalModal} from 'vue-final-modal';

// eslint-disable-next-line no-undef
defineProps(['styleModal', 'classModal']);
</script>

<style scoped>

.modal-overlay-first {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 20000;
  justify-content: center;
  align-items: center;
  /*width: 100vw;*/
  background-color: #000000da;
}

.modal-second {
  text-align: center;
  background-color: white;
  z-index: 30000;
  /*width: 100vw;*/
  border-radius: var(--borderRadius);
  padding: 15px 15px;
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