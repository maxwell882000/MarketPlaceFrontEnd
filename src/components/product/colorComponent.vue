<template>
  <div class="mb-4" v-if="colors.length !== 0">
    <h6>Цвет</h6>
    <div class="color-select  ">
      <button
          v-for="(color, colorIndex) in colors"
          :key="'color_' + colorIndex"
          @click="setColor(color, colorIndex)"
          :class="['color-btn', this.selected === color.id && 'active']"
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
  computed: {
    ...mapGetters({
      colors: 'productModule/colors',
      product: 'productModule/product',
      selectOrder: 'backetModule/chosenColors'
    }),
    selected() {
      return this.selectOrder(this.product.id)
    }
  },
  methods: {
    ...mapMutations({
      setImageList: "productModule/setImageList",
      setOrder: "backetModule/setOrder",
    }),
    ...mapActions({
      updateParams: "backetModule/updatePreOrder"
    }),
    setColor(color) {
      this.setImageList(color.images);
      const response = {
        id: color.id,
        name: color.color_name
      };
      this.setOrder({
        id: this.product.id,
        key: "colors",
        value: response
      });

      this.updateParams({colors: response});
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