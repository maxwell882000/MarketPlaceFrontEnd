<template>
  <div class="d-flex align-items-center flex-wrap flex-sm-wrap flex-md-nowrap">
    <div v-if="Object.keys(credit).length  !== 0" class="price">
      <small> {{ credit.name }}</small>
      <p class="mb-0 actual-number">
        <span class="numbers">{{ credit.price }}</span>
        <small class="time text-nowrap"> x {{ credit.month }} мес</small>
      </p>
    </div>
    <div class="my-2 my-sm-2 my-md-0 basket">
      <CartButton class="basket" :basket="basket" :id="id"/>
    </div>
  </div>
</template>
<script>
import CartButton from "../buttons/CartButton";

export default {
  props: {
    credit: {
      type: Object,
      default() {
        return {
          name: "Рассрочка",
          price: "150 000",
          month: "2"
        }
      }
    },
    basket: {
      type: Boolean,
      default() {
        return false;
      },
    },
    id: {
      type: Number,
      default() {
        return undefined
      }
    }
  },

  components: {CartButton}
}
</script>

<style scoped>
@media (max-width: 491px) {
  .price {
    display: none;
  }

}

@media (max-width: 767px) {
  .price {
    display: none;
    margin-right: 0 !important;
  }

  .basket {
    width: 100%;
  }
}

.price .actual-number {
  font-size: 12px !important;
  line-height: 15px;
  font-weight: 400;
}

.price .actual-number span {
  font-size: 16px;
  line-height: 17px;
  font-weight: 700;
}

.price .actual-number small {
  font-size: 13px;
  font-weight: 400;
  line-height: 15px;
}

.price {
  border: 1px solid #F2F2F2;
  border-radius: 8px;
  padding: 3px 7px;
  margin-right: 10px;
  line-height: 17px;
  width: 100%;
}

.price small {
  font-size: 11px;
}

.price .numbers {
  color: var(--blue);
  font-weight: 700;
}

.price .time {
  font-weight: 600;
}
</style>