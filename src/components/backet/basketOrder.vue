<template>
    <div class="card mt-3 py-2 px-3">
      <b-form-checkbox v-model="checkShop">
        <b-icon icon="shop" class="me-1" variant="secondary"/>
        MacBro
        <router-link to="/">
          <b-icon icon="chevron-compact-right" variant="secondary"/>
        </router-link>
      </b-form-checkbox>
      <div class="line"></div>
      <CartItem :checkItem="checkShop" :itemInfo="itemInfo"/>
    </div>
</template>
<script>
import CartItem from "@/components/cart/Cart-item";
export default {
  components: {CartItem},
  data(){
    return {
      checkShop: undefined,
      itemInfo: {
        oldPrice: "3 071 880",
        price: "2 898 000",
        name: "Смартфон Samsung Galaxy A12 (SM-A125) 3/32 ГБ RU, красный",
        picture:
            "https://www.lg.com/in/images/tvs/md06117716/gallery/Desk-02.jpg",
      },
    };
  },

  methods:{
    checkOrder() {

    }
  }
}
</script>