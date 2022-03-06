<template>
  <section class="container">
    <back-button title="К описанию товара"></back-button>
    <div class="d-flex align-items-center border-st back-white p-3 my-3">
      <div>
        <b-img src=""></b-img>
      </div>
      <span class="bold text-sm"> Отзыв о товаре Смартфон Apple iPhone 12 128GB Purple</span>
    </div>
    <div class="border-st back-white p-3 my-3">
      <b-row>
        <b-col cols="6" class="mb-3">
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
          <TextArea placeholder="Ваш комментарий"></TextArea>
        </b-col>
        <div class="w-100"></div>
        <b-col cols="6">
          <ButtonForm title="Опубликовать отзыв"></ButtonForm>
        </b-col>
      </b-row>

    </div>
  </section>
</template>
<script>
import TextArea from "@/components/helper/text-area/textArea";
import ButtonForm from "@/components/helper/button/buttonForm";
import BackButton from "@/components/helper/button/backButton";

export default {
  components: {BackButton, ButtonForm, TextArea},
  data() {
    return {
      selected: 0,
    }
  },
  methods: {
    isSelected(selected) {
      return this.selected < selected ? 'var(--star)' : 'var(--yellow)';
    },
    putMark(selected) {
      this.selected = selected;
    }
  }
}
</script>