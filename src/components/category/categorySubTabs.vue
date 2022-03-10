<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div>
        <h5>Смартфоны и гаджеты</h5>
      </div>
      <div>
        <router-link to="" class="remove-link">
          <b-button variant="link" class="decoration-none text-sm"> Смотреть все
            <b-icon icon="arrow-right"/>
          </b-button>
        </router-link>
      </div>
    </div>
    <div>
      <b-tabs nav-class="custom-tabs" pills>
        <b-tab title="Смартфоны" active>
          <div>
            <SalesRoll :perPage="3" :products="produt"></SalesRoll>
          </div>
        </b-tab>
        <b-tab title="Кнопочные телефоны">
          <b-card-text>Tab contents 2</b-card-text>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>
<style>

h5 {
  padding: 0;
  margin: 0;
}
</style>
<script>
import SalesRoll from "@/components/shared/SalesRoll";
import {mapGetters} from "vuex";

export default {
  components: {SalesRoll},
  computed: {
    ...mapGetters({
      product: 'mainModule/product_of_day'
    })
  }
}
</script>