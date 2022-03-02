<template>
  <h6 class="mt-4">Продавец</h6>
  <div class="seller d-flex align-items-center justify-content-between">
    <router-link
        :to="'/shop/' + shop.slug"
        class="d-flex align-items-center shop-link"
    >
      <img :src="shop.image" alt="seller icon"/>
      <div class="mx-1">
        <p class="mb-0">{{ shop.name }}</p>
        <!--        <p class="mb-0">-->
        <!--          <b-icon icon="star-fill" class="star"/>-->
        <!--          <span class="text-muted mx-2">4.6 86 отзывов</span>-->
        <!--        </p>-->
      </div>
    </router-link>
    <b-icon icon="chevron-right"/>
  </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      shop: 'productModule/shop'
    })
  }
}
</script>