<template>
  <header-product>
    <section class="section-container mt-3">
      <b-row>
        <b-col cols="12" class="col-xl-5 col-lg-6 col-md-12 col-sm-12 py-4">
          <div :class=" index!==0 && 'mt-4'" :key="'characteristics_item_' + main.id"
               v-for="(main,index) in product.characteristics">
            <h6>{{ main.header }}</h6>
            <ul class="dotted-li about-content text-dark">
              <template v-for="(items, index) in firstChar.values" :key="'char_'  + index">
                <li>
                  <span>{{ items.key }}</span>
                  <span style="border-bottom: 1.5px dotted var(--gray400);
                      flex: 1 0;margin-bottom: 7px;
                  line-height: 20px;">
              </span>
                  <span>{{ items.value }}</span>
                </li>
              </template>
            </ul>
          </div>
        </b-col>
      </b-row>

    </section>
  </header-product>

</template>
<script>
import HeaderProduct from "@/components/product/header/headerProduct";
import {mapGetters} from "vuex";

export default {
  components: {HeaderProduct},
  computed: {
    ...mapGetters({
      product: 'productModule/product'
    }),
    firstChar() {
      return this.product.characteristics[0];
    },
  }
}
</script>
<style scoped>
h6 {
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
}
</style>