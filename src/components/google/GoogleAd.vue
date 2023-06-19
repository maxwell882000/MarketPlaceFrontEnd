<template>
  <div ref="adContainer"></div>

</template>

<script>
import { load } from 'google-adsense';
export default {
  name: "GoogleAd",
  mounted() {
    load(this.$refs.adContainer, {
      adClient: 'your-ad-client-id',
      adSlot: 'your-ad-slot-id',
      adFormat: 'auto',
    });
  },
}
</script>

<style scoped>

</style>