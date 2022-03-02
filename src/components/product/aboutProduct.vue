<template>
  <div class="about-item mt-4">
    <b-tabs
        class="about-content"
        active-nav-item-class="active-tab"
        active-tab-class=""
        content-class="mt-3"
    >
      <b-tab>
        <template #title>
          <h5 class="tab-content"> {{ aboutProduct.header }}</h5>
        </template>
        <p>
          {{ aboutProduct.body }}
        </p>
      </b-tab>
      <b-tab v-if="showChar">
        <template #title>
          <h5 class="tab-content">{{ firstChar.header }}</h5>
        </template>
        <table class="dotted-table">
          <tr v-for="(items, index) in firstChar.values" :key="'char_'  + index">
            <th><span>{{ items.key }}</span></th>
            <th><span>{{ items.value }}</span></th>
          </tr>
        </table>
      </b-tab>
    </b-tabs>
  </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      product: 'productModule/product'
    }),
    aboutProduct() {
      return this.product.about_product;
    },
    showChar() {
      return this.product.characteristics && this.product.characteristics.length !== 0;
    },
    firstChar() {
      return this.product.characteristics[0];
    }
  },
  methods: {}
}
</script>