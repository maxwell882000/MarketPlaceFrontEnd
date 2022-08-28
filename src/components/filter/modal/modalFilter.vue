<template>
  <div class="filter-start d-block d-sm-block d-md-none p-mobile">
    <ModalOld v-bind="Object.assign( {},$props, $attrs)" class-modal="filter-full-class">
      <div style="overflow-y:scroll; max-height: 100%; overflow-x:hidden; ">
        <div style="font-size: 1.4rem; line-height: 1.5rem" class="d-flex  justify-content-between align-items-center">
          <button @click="$emit('closeModal')" class="button-clear block text-left bg-white">
            <span style="cursor: pointer; color: var(--gray300); font-size: 170%" class="bi bi-x"
            ></span>
          </button>
          <div class="text-500">
            <span>Фильтры</span>
          </div>
          <div></div>
        </div>
        <section class="container">
          <div class="p-mobile">
            <filteration-holder></filteration-holder>
          </div>
        </section>
      </div>
    </ModalOld>
  </div>
</template>
<script>
export default {
  inheritAttrs: false
}
</script>
<script setup>

import FilterationHolder from "@/components/filter/filteration/filterationHolder";
import ModalOld from "@/components/modal/modalOld";
// eslint-disable-next-line no-undef
defineEmits(['closeModal']);
</script>
<style>
.filter-start .modal-second {
  border-radius: 0;
  padding: 0
}

.filter-start .filter-full-class {
  width: 100vw;
  height: 100%;
}
</style>