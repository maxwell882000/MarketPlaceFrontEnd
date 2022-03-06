<template>
  <section class="container">
    <b-row class="mb-4">
      <b-col cols="9" class="cols">
        <div class="comment border-st">
          <h5>Отзывы 232(количество)</h5>
          <remained-comment></remained-comment>
          <ButtonGray title="Показать больше отзывов"></ButtonGray>
        </div>
      </b-col>
      <b-col cols="3">
        <rating-comment></rating-comment>
      </b-col>
    </b-row>
  </section>
</template>

<style scoped>

.comment {
  background-color: white;
  padding: 24px;
}
</style>
<script>


import RatingComment from "@/components/product/comment/ratingComment";
import RemainedComment from "@/components/product/comment/remainedComment";
import ButtonGray from "@/components/helper/button/buttonGray";

export default {
  components: {ButtonGray, RemainedComment, RatingComment}
}
</script>