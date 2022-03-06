<template>
  <div class="my-4">
    <div class="mb-2">
      <div class="d-flex align-items-center">
        <div style="margin-right: 10px">
          <b-avatar size="lg"></b-avatar>
        </div>
        <div>
          <span class="bold">Darrell Steward</span>
          <br>
          <span class="time">Вчера в 12:40</span>
        </div>
      </div>
      <div class="d-flex mt-1 align-items-end">
        <div style="margin-left:-5px">
          <stars rating="4"></stars>
        </div>
        <span class="time">Отличный товар</span>
      </div>
    </div>
    <div>
      <p class="bold">Комментарии:</p>
      <span>
      В последнее время мне не везло с покупкой телефона...долго... в этот раз я выбирала... но вспомнила
      ,,самсунг",который у меня с 2012 года работает,в интернет с него плохо заходить,он только для звонков... и
      решила-пусть будет опять-Samsung ! Заказала и оплатила,привезли на следующий день,очень довольна покупкой телефона
      , чехол нашла без проблем! Самсунг сделан в Индии,прост в работе,понятен,прекрасные фото получаются,очень удобно
      вставлять сим-карту,сделала режим ,от которого глаза отдыхают!
    </span>
    </div>
    <LikeDislikeComment></LikeDislikeComment>
    <hr>
  </div>

</template>

<style scoped>

.time {
  font-size: 13px;
  color: var(--gray);
}

p {
  padding: 0 !important;
  margin: 0 !important;
}

</style>
<script>
import Stars from "@/components/product/stars";
import LikeDislikeComment from "@/components/product/comment/likeDislikeComment";

export default {
  components: {Stars, LikeDislikeComment}
}
</script>