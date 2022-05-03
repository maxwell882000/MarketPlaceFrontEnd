<template>
  <div class="card mt-3 py-2 px-3">
    <b-form-checkbox v-model="checkShop">
      <b-icon icon="shop" class="me-1" variant="secondary"/>
      <router-link class="remove-link" :to="'/shop/' + order.shop.slug">
        <span class="text-sm bold px-2">{{ order.shop.name }}</span>
        <b-icon icon="chevron-right" variant="secondary"/>
      </router-link>
    </b-form-checkbox>
    <div class="line"></div>
    <CartItem :key="'basket_item_shop_' + order.id" v-for="order in order.orders"
              :index="index"
              :order="order"
    />
  </div>
</template>
<script>
import CartItem from "@/components/cart/Cart-item";
import {mapGetters, mapMutations} from "vuex";

export default {
  components: {CartItem},
  props: {
    order: Object,
    index: Number
  },
  computed: {
    ...mapGetters({
      isAllInShop: 'prepareBasketModule/isInShopSelected'
    }),
    checkShop: {
      get() {
        return this.isAllInShop(this.index);
      },
      set(val) {
        if (val) {
          this.addAllInShop(this.index);
        } else {
          this.cleanAllInShop(this.index);
        }
      }
    }
  },
  methods: {
    ...mapMutations({
      addAllInShop: 'prepareBasketModule/addAllInShop',
      cleanAllInShop: 'prepareBasketModule/cleanAllInShop'
    })
  }
}
</script>