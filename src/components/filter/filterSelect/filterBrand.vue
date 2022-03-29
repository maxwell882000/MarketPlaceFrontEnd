<template>
  <filter-select-base title="Бренд" prefix="brand" v-slot="{item}">
    <span class="text-sm"> {{ item.name }} ({{ item.num_product }})</span>
  </filter-select-base>
<!--  <filter-item collapse="brand" title="Бренд">-->
<!--    <filter-select>-->
<!--      <b-form-group v-slot="{ ariaDescribedby }">-->
<!--        <input-select :aria-describedby="ariaDescribedby" v-model="isCollected" :value="item" name="filter_brands"-->
<!--                      :key="'brand_filter_select_' + item.id"-->
<!--                      v-for="item in iterate">-->
<!--          <span class="text-sm"> {{ item.name }} ({{ item.num_product }})</span>-->
<!--        </input-select>-->
<!--      </b-form-group>-->
<!--    </filter-select>-->
<!--  </filter-item>-->
</template>
<script>
import FilterSelectBase from "@/components/filter/filterSelect/base/filterSelectBase";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: {FilterSelectBase},

  // setup() {
  //   const store = useStore();
  //   const iterate = computed(() => store.getters['productFilterByModule/brand']);
  //   const addChosen = (value) => store.dispatch("productFilterByModule/addToChosenFilterAndGetProduct", value);
  //   const isCollected = computed({
  //     get() {
  //       return store.getters['productFilterByModule/getChosenItems']({values: iterate.value, prefix_key: "brand_id"})
  //     },
  //     set(val) {
  //       console.log(iterate);
  //       addChosen({prefix_key: "brand_id", chosen: val, old: iterate.value});
  //     }
  //   });
  //   return {
  //     isCollected: isCollected,
  //     iterate: iterate
  //   }
  // },
  // data() {
  //   return {
  //     collect: [],
  //   }
  // },
  // computed: {
  //   ...mapGetters({
  //     brand: "productFilterByModule/brand",
  //     getChosen: 'productFilterByModule/getChosenItems'
  //   }),
  //   isCollected: {
  //     get() {
  //       return this.getChosen({values: this.brand, prefix_key: "brand_id"});
  //     },
  //     set(val) {
  //       this.collect = val;
  //       this.addChosen({prefix_key: "brand_id", chosen: val, old: this.brand});
  //     }
  //   }
  // },
  // methods: {
  //   ...mapActions({
  //     addChosen: 'productFilterByModule/addToChosenFilterAndGetProduct',
  //   })
  // }
}
</script>