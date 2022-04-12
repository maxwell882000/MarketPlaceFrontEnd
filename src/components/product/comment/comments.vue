<template>
  <section class="container">
    <b-row class="mb-4">
      <b-col cols="9" class="cols">
        <div class="comment rounded-st">
          <h5>Отзывы {{product.num_comment}}(количество)</h5>
          <loader waiting="comment">
            <remained-comment  :comment="item" v-for="item in comment" :key="'commment_unique_s' + item.id"></remained-comment>
            <loader :div-style="{height: '5vh'}" waiting="new_comment">
              <ButtonGray v-if="!lastPage"  @click="getNewComments" title="Показать больше отзывов"></ButtonGray>
            </loader>
          </loader>
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
import {mapActions, mapGetters} from "vuex";
import Loader from "@/components/loading/loader";

export default {
  components: {Loader, ButtonGray, RemainedComment, RatingComment},
  computed: {
    ...mapGetters({
      product: 'productModule/product',
      comment: 'commentModule/comment',
      lastPage : 'commentModule/isLastPage',
    })
  },
  methods: {
    ...mapActions({
      getNewComments: 'commentModule/getNewComments'
    })
  }

}
</script>