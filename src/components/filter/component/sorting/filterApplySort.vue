<template>
  <div class="d-flex">
    <button @click="changeTab(index)" style="all:unset;cursor: pointer; display:block;margin-right: 1.571rem"
            :key="'sort_key_' + index"
            v-for="(item, index) in sortItems">
      <span @click="applySort(index)" class="text-gray" :class="current === index && 'active_sort'">{{ item.name }}
       <span style="font-size: 0.857rem;" v-show="current === index"
             :class=" isDown ? 'bi-chevron-down' : 'bi-chevron-up'"></span>
      </span>

    </button>
  </div>
</template>

<script setup>
import {useI18n} from "vue-i18n";
import {ref} from "vue";
import {useStore} from "vuex";

const t = useI18n().t;
// eslint-disable-next-line no-unused-vars
const current = ref(0);
const isDown = ref(false);
const store = useStore();
const addFilter = (val) => store.commit('productFilterByModule/addFilterBy', val);
const getProduct = () => store.dispatch("productFilterByModule/getProducts", 1);

function applySort(index) {
  console.log("asdsd");
  console.log(index);
  isDown.value = !isDown.value;
  const selectedItems = sortItems[index];
  clean(index);
  addFilter({key: selectedItems.key, item: isDown.value});
  addFilter({key: selectedItems.key + "_desc", item: !isDown.value});
  getProduct();
}

function clean(index) {
  sortItems.filter((e, i) => i !== index).forEach((e) => {
    addFilter({key: e.key, item: false});
    addFilter({key: e.key + "_desc", item: false});
  });
}

function changeTab(index) {
  if (current.value !== index) {
    current.value = index;
    isDown.value = true;
  }
}

// eslint-disable-next-line no-unused-vars
const sortItems = [
  {
    name: t("По цене"),
    key: "by_price",
  },
  // {
  //   name: t("По популярности"),
  //   key: "by_popularity",
  // },
  // {
  //   name: t("По рейтингу"),
  //   key: "by_rating",
  // },
  {
    name: t("По размеру скидки"),
    key: "by_discount",
  }
];
</script>

<style scoped>

.active_sort {
  color: var(--dark) !important;
}
</style>