<template>
  <div class="d-flex">
    <div class="price">
      <small> {{ credit.name }}</small>
      <p class="mb-0">
        <span class="numbers">{{ credit.price }}</span>
        <small class="time"> x {{ credit.month }} мес</small>
      </p>
    </div>
    <CartButton/>
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
    }
  },

  components: {CartButton}
}
</script>

<style scoped>
.price {
  border: 1px solid #F2F2F2;
  border-radius: 8px;
  padding: 3px 7px;
  margin-right: 10px;
  line-height: 17px;
  width: 100%;
}

.price small {
  font-size: 13px;
}

.price .numbers {
  color: var(--blue);
  font-weight: 700;
}

.price .time {
  font-weight: 600;
}
</style>