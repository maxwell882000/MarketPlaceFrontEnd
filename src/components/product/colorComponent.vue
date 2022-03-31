<template>
  <div class="mb-4" v-if="colors.length !== 0">
    <h6>Цвет</h6>
    <div class="color-select  ">
      <button
          v-for="(color, colorIndex) in colors"
          :key="'color_' + colorIndex"
          @click="setColor(color, colorIndex)"
          :class="['color-btn', this.selected === colorIndex && 'active']"
      >
        <img :src="color.image" alt="color"/>
        <small>{{ color.color_name }}</small>
      </button>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  data() {
    return {
      selected: -1,
    }
  },
  computed: {
    ...mapGetters({
      colors: 'productModule/colors',
      product: 'productModule/product'
    })
  },
  methods: {
    ...mapMutations({
      setImageList: "productModule/setImageList",
      setOrder: "backetModule/setOrder",
    }),
    ...mapActions({
      updateParams: "backetModule/updatePreOrder"
    }),
    setColor(color, index) {
      this.selected = index;
      this.setImageList(color.images);
      this.setOrder({
        id: this.product.id,
        key: "colors",
        value: color.color_name
      });
      this.updateParams({key: "colors", value: color.color_name});
    }
  }
}
</script>
<style lang="scss">
.color-select {
  display: flex;
  flex-wrap: wrap;
}
</style>