<template>
  <div style="height: 100%; width: 100vw">
    <l-map
        v-model="zoom"
        v-model:zoom="zoom"
        :center="[41.2995, 69.2401]"
        @move="log('move')"
    >
      <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-control-layers/>
      <l-marker :lat-lng="[41.2995, 69.2401]">
        <l-icon>
          <img src="@/assets/icons/map_pin.svg">
        </l-icon>
      </l-marker>
    </l-map>
  </div>
</template>
<script>
import {
  LMap,
  LControlLayers,
  LIcon,
  LMarker,
  LTileLayer,

} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  components: {
    LMap,
    LControlLayers,
    LTileLayer,
    LIcon,
    LMarker,
  },
  data() {
    return {
      zoom: 11,
      iconWidth: 25,
      iconHeight: 40,
    };
  },
  computed: {
    iconUrl() {
      return `https://placekitten.com/${this.iconWidth}/${this.iconHeight}`;
    },
    iconSize() {
      return [this.iconWidth, this.iconHeight];
    },
  },
  methods: {
    log(a) {
      console.log(a);
    },
    changeIcon() {
      this.iconWidth += 2;
      if (this.iconWidth > this.iconHeight) {
        this.iconWidth = Math.floor(this.iconHeight / 2);
      }
    },
  },
};
</script>
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
