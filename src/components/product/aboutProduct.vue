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
        <p class="text-dark text-400">
          {{ aboutProduct.body }}
        </p>
      </b-tab>
      <b-tab v-if="showChar">
        <template #title>
          <h5 class="tab-content">{{ firstChar.header }}</h5>
        </template>
        <table class="dotted-table text-dark">
          <tr v-for="(items, index) in firstChar.values" :key="'char_'  + index">
            <th><span>{{ items.key }}</span></th>
            <th><span>{{ items.value }}</span></th>
          </tr>
        </table>
        <router-link v-show="product.characteristics.length > 1"
                     :to="`/item/${$route.params.id}/description`"
                     class="remove-link text-blue">
          Все характеристики
        </router-link>
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
    firstChar() {
      return this.product.characteristics[0];
    },
    aboutProduct() {
      return this.product.about_product;
    },
    showChar() {
      return this.product.characteristics && this.product.characteristics.length !== 0;
    },

  },
  methods: {}
}
</script>
<style lang="scss">
.about-content {
  @media (max-width: 767px) {
    ul.nav-tabs {flex-direction: row !important;
      flex-wrap: nowrap;
      overflow: scroll;
      padding-bottom: 5px;

      li.nav-item {
        width: max-content;
        white-space: nowrap;
        //min-width: 160px;
        flex: 1;
        a {
          height: 100%;
        }
      }
    }
  }
}
</style>