<template>
  <div class="d-flex">
    <div class="price">
      <small>Рассрочка</small>
      <p class="mb-0">
        <span class="numbers">150 000</span>
        <small class="time"> x 6 мес</small>
      </p>
    </div>
    <CartButton />
  </div>
</template>
<script>
import CartButton from "../buttons/CartButton";
export default {
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