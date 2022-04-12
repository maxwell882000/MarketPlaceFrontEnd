<template>
  <section class="container">
    <loader waiting="left_comment">
      <back-button title="К описанию товара"></back-button>
      <div class="d-flex align-items-center rounded-st bg-white p-3 my-3">
        <div class="mr-4" style="height: 3rem;width: 3rem;">
          <img class="img-res" :src="image"/>
        </div>
        <span class="bold text-sm">{{ name }}</span>
      </div>
      <div class="rounded-st bg-white p-3 my-3">
        <b-row>
          <b-col cols="6" class="mb-3">
            <h6 v-show="error" v-html="error" class="text-error text-font"></h6>
            <h6 class="bold">Общая оценка</h6>
            <b-icon :key="'star_index_' + index" v-for="index in 5" size="2x"
                    :class="index!==1 && 'mx-2'"
                    :style="{color: isSelected(index), cursor: 'pointer'}"
                    @click="putMark(index)"
                    icon="star-fill"/>
          </b-col>
          <div class="w-100"></div>
          <b-col cols="6">
            <h6 class="bold">Расскажите подробнее</h6>
            <TextArea v-model="comment" placeholder="Ваш комментарий"></TextArea>
          </b-col>
          <div class="w-100"></div>
          <b-col cols="6">
            <ButtonForm :is-entered="isEntered" @click="submitComment" title="Опубликовать отзыв"></ButtonForm>
          </b-col>
        </b-row>
      </div>
    </loader>
    <SuccessComment v-if="showSuccess"></SuccessComment>
  </section>
</template>
<script>
import TextArea from "@/components/helper/text-area/textArea";
import ButtonForm from "@/components/helper/button/buttonForm";
import BackButton from "@/components/helper/button/backButton";
import Loader from "@/components/loading/loader";
import {mapActions, mapGetters, mapMutations} from "vuex";
import SuccessComment from "@/components/product/comment/successComment";

export default {
  components: {SuccessComment, Loader, BackButton, ButtonForm, TextArea},
  data() {
    return {
      selected: 0,
      comment: "",
    }
  },
  computed: {
    ...mapGetters({
      name: 'productModule/name',
      isAuthenticated: "isAuthenticated",
      image: "productModule/image",
      showSuccess: 'commentModule/showSuccess',
      error: 'commentModule/error'
    }),
    isEntered() {
      return this.comment && this.selected;
    }
  },
  methods: {
    ...mapMutations({
      login: 'authWindow/setLogin',
      setSuccess: 'commentModule/setShowSuccess'
    }),
    ...mapActions({
      leftComment: 'commentModule/leftComment'
    }),
    isSelected(selected) {
      return this.selected < selected ? 'var(--star)' : 'var(--yellow)';
    },
    submitComment() {
      let request = {
        message: this.comment,
        mark: this.selected
      }
      this.leftComment(request);
    },
    putMark(selected) {
      this.selected = selected;
    }
  },
  created() {
    if (!this.isAuthenticated) {
      this.$router.replace(`/item/${this.$route.params.id}/`);
      this.login();
    }
  },
  beforeUnmount() {
    this.setSuccess(false);
  }
}
</script>