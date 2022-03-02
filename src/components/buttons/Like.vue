<template>
  <button @click.prevent="clicked" class="like-btn">
    <b-icon :style="styleIcon()" :icon="fill ? 'heart-fill' : 'heart'"></b-icon>
  </button>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  props: ['id', 'favourite'],
  data() {
    return {
      fill: this.favourite,
    }
  },
  methods: {
    ...mapGetters(['isAuthenticated']),
    ...mapMutations(['authWindow/setLogin']),
    ...mapActions(['addRemoveFavourite']),
    clicked() {
      if (this.id && this.isAuthenticated()) {
        this.addRemoveFavourite(this.id);
        this.fill = !this.fill;
      } else if (!this.isAuthenticated()) {
        this['authWindow/setLogin']();
      }
    },
    styleIcon() {
      return {
        color: this.fill ? 'red' : "grey"
      }
    }
  }
}
</script>
<style scoped>
button.like-btn {
  background: transparent;
  border-radius: 20px;
  z-index: 100;
  border: none;
  font-size: 18px;
}
</style>