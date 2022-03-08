<template>
  <section>
    <div class="d-flex">
      <div class="back-white information w-30">
        <back-button title="Назад"></back-button>
        <h4>Способ доставки</h4>
        <switch-button @changed="setDelivery" class="mb-3"></switch-button>
        <delivery v-if="isDelivery"></delivery>
        <self-delivery v-else></self-delivery>
        <!--        <span class="text-gray text-sm"> Расскажите информацию, которая может пригодиться курьеру — например, как быстрее к вам добраться</span>-->
      </div>
      <div style="max-width: 70%">
        <open-layer></open-layer>
      </div>
    </div>
  </section>
</template>
<script>
import BackButton from "@/components/helper/button/backButton";
import SwitchButton from "@/components/buttons/switchButton";

import OpenLayer from "@/components/map/leaflet";
import Delivery from "@/components/backet/map/delivery";
import SelfDelivery from "@/components/backet/map/selfDelivery";

export default {
  components: {SelfDelivery, Delivery, OpenLayer, SwitchButton, BackButton},
  data() {
    return {
      isDelivery: true
    }
  },
  methods: {
    setDelivery(e) {
      this.isDelivery = e;
    }
  }
}
</script>
<style scoped>

.information {
  padding-left: 2rem;
  padding-right: 2rem;
  min-height: 100vh;
  height: 100vh;
}
</style>