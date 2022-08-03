<template>
  <div class="d-flex align-items-center flex-wrap flex-sm-wrap flex-md-nowrap">
    <div v-if="Object.keys(credit).length  !== 0" class="price">
      <span> {{ credit.name }}</span>
      <p class="mb-0 actual-number">
        <span class="numbers">{{ credit.price }}</span>
        <span class="month text-nowrap "> x {{ credit.month }} мес</span>
      </p>
    </div>
    <div class="my-2 my-sm-2 my-md-0 basket">
      <CartButton class="basket" :basket="basket" :image="image" :id="id"/>
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
    image: {
      type: String,
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
  /*.price {*/
  /*  display: none;*/
  /*}*/

}

/*.price .actual-number {*/
/*  font-size: 12px !important;*/
/*  line-height: 15px;*/
/*  font-weight: 400;*/
/*}*/

/*.price .actual-number span {*/
/*  font-size: 1rem;*/
/*  line-height: 17px;*/
/*  font-weight: 700;*/
/*}*/

.price .actual-number small {
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 15px;
}

.price {
  border: 1px solid #F2F2F2;
  border-radius: 8px;
  padding: 0.4rem;
  margin-right: 10px;
  line-height: 17px;
  width: 100%;
}

.price .month {
  font-size: 0.8rem;
}

.price .numbers {
  color: var(--blue);
  font-weight: 700;
}


@media (max-width: 767px) {
  /*.price {*/
  /*  display: none;*/
  /*  margin-right: 0 !important;*/
  /*}*/
  .price {
    border: none !important;
    padding: 0;
    margin-right: 0;
  }

  .price .numbers {
    font-size: 1.3rem;
  }

  .basket {
    width: 100%;
  }
}

</style>