<template>
  <div class="back-white border-st">
    <b-container class="w-100">
      <b-row class="text-rate justify-content-center">
        <b-col cols="4" align-self="center">
          <div class="d-flex align-items-end p-0 m-0">
            <div>
              <h4>4.5</h4>
            </div>
            <div>
              <span>/5</span>
            </div>
          </div>
          <span>отзывов</span>
        </b-col>
        <b-col cols="8">
          <div class="d-flex align-items-center">
            <div style="font-size: 10px">
              <stars rating="4"></stars>
            </div>
            <span>79</span>
          </div>
          <div class="d-flex align-items-center">
            <div style="font-size: 10px">
              <stars rating="4"></stars>
            </div>
            <span>79</span>
          </div>
          <div class="d-flex align-items-center">
            <div style="font-size: 10px">
              <stars rating="4"></stars>
            </div>
            <span>79</span>
          </div>
          <div class="d-flex align-items-center">
            <div style="font-size: 10px">
              <stars rating="4"></stars>
            </div>
            <span>79</span>
          </div>
        </b-col>
        <b-col cols="12">
          <router-link :to='`/item/${$route.params.id}/comment`'>
            <ButtonGray style="margin-top: 5px!important;" title="Оставить отзыв"></ButtonGray>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Stars from "@/components/product/stars";
import ButtonGray from "@/components/helper/button/buttonGray";

export default {
  components: {ButtonGray, Stars}
}
</script>
<style scoped>
.text-rate {
  padding: 10px 0;
}


span {
  font-size: 13px !important;
}

h4 {
  margin-bottom: 0;
  font-weight: 700;
}

</style>