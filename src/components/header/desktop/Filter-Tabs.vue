<template>
  <div class="filter-tabs">
    <b-tabs
        pills
        vertical
        nav-wrapper-class="bg-white left-tabs scoped-sidebar "
        class="nav-tabs"
        v-model="tabValue"
        content-class="w-100"
        active-nav-item-class="bg-light text-violet"
        active-tab-class="text-uppercase text-dark">
      <b-tab v-for="(item,index) in drop_bar" :key="item.slug + '_tabs_in_category'">
        <template #title>
          <div @mouseover="changeTabValue(index)" class="d-flex justify-content-between align-items-center w-100">
            <div class="d-flex">
              <div class="mr-2" style="width: 24px; height: 24px">
                <img class="img-res" alt="icon-category" :src="item.icon">
              </div>
              <span>{{ item.name }} </span>
            </div>
            <div>
              <span class="bi bi-chevron-right" style="width: 100%;"/>
            </div>
          </div>
        </template>
        <category :item="item">
          <router-link :to="$navigate(item)" class="remove-link">
            <h5 class="header">{{ item.name }}</h5>
          </router-link>
        </category>
      </b-tab>
    </b-tabs>
  </div>

</template>

<script>
import {mapGetters,} from "vuex";
import Category from "@/components/header/desktop/category";

export default {
  components: {Category},
  data() {
    return {
      tabValue: 0
    }
  },
  computed: {
    ...mapGetters(['drop_bar'])
  },
  methods: {
    changeTabValue(value) {
      this.tabValue = value;
    }
  }
};
</script>

<style lang="scss">

.filter-tabs .header {
  font-size: large;
  font-weight: 600;
  text-transform: initial;
}

.filter-tabs .scoped-sidebar {
  width: 30%;
}

.filter-tabs .scoped-sidebar span:hover {
  color: var(--violet);
}

.filter-tabs .nav-tabs {
  height: 100%;
}


</style>