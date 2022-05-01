<template>
  <div v-for="item in discount.items" :key="item.id" class="row stocks">
    <discount-item :item="item" class="col-lg-4 col col-md-6 col-sm-12"></discount-item>
  </div>
  <!--  <b-tabs-->
  <!--      pills-->
  <!--      content-class="mt-1"-->
  <!--      lazy-->
  <!--      active-nav-item-class="tab-header-active"-->
  <!--      active-tab-class="tab-active"-->
  <!--      class="main-page__custom-tabs"-->
  <!--  >-->


  <!--    &lt;!&ndash;    <b-tab title="">&ndash;&gt;-->

  <!--    &lt;!&ndash;    </b-tab>&ndash;&gt;-->
  <!--    &lt;!&ndash;    <b-tab title="Подарок за покупку"></b-tab>&ndash;&gt;-->
  <!--    &lt;!&ndash;    <b-tab title="Промокоды"></b-tab>&ndash;&gt;-->
  <!--    &lt;!&ndash;    <b-tab title="Скидки"></b-tab>&ndash;&gt;-->
  <!--  </b-tabs>-->
</template>
<script>
import {mapGetters} from "vuex";
import DiscountItem from "@/components/discount/discountItem";

export default  {
  components: {DiscountItem},
  computed: {
    ...mapGetters('mainModule', {
      discount: 'discount'
    })
  },
}
</script>
<style scoped>

.stocks .col {
  padding: 10px;
}

.stocks img {
  transition: all 0.3s;
  width: 100%;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 0 0 transparent;
}

.stocks img:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>