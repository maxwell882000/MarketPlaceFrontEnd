<template>
  <div class="cart-item">
    <div class="row align-items-center justify-content-space-between">
      <div class="col col-12 col-md-7 d-flex align-items-center">
        <b-form-checkbox v-model="check" />
        <img
          class="cart-item__image"
          :src="itemInfo.picture"
          :alt="itemInfo.name"
        />
        <div>
          <small class="old-price d-block" v-if="itemInfo.oldPrice">
            {{ itemInfo.oldPrice }}
          </small>
          <h6 class="mb-1">{{ itemInfo.price }}</h6>
          <p>{{ itemInfo.name }}</p>
        </div>
      </div>
      <div
        class="
          count-btns
          col col-5 col-sm-4 col-md-3
          d-flex
          justify-content-center
        "
      >
        <p class="mb-0">
          <button class="btn btn-light">-</button>
          <span class="px-3 fw-bold">1</span>
          <button class="btn btn-light">+</button>
        </p>
      </div>
      <div class="col col-7 col-sm-8 col-md-2 d-flex justify-content-end">
          <trash></trash>
      </div>
    </div>
  </div>
</template>

<script>
import Trash from "@/components/icons/trash";
export default {
  components: {Trash},
  props: {
    id: String,
    itemInfo: Object,
    amount: Number,
    checkItem:Boolean
  },
  data() {
    return {
      check: this.checkItem
    }
  },
  watch:{
    checkItem(){
      this.check = this.checkItem;
    }
  }
};
</script>

<style scoped>
.cart-item__image {
  width: 100px;
}
.count-btns button {
  border-radius: 12px;
  font-weight: 500;
  color: #29334b;
}
</style>