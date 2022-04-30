<template>
  <b-tabs
      pills
      vertical
      nav-wrapper-class="bg-white left-tabs scoped-sidebar"
      class="nav-tabs"
      content-class="w-100"
      active-nav-item-class="bg-light text-violet"
      active-tab-class="text-uppercase text-dark">
    <b-tab v-for="item in drop_bar" :key="item.slug + '_tabs_in_category'">
      <template #title>
        <div class="d-flex justify-content-between align-items-center w-100">
          <div>
            <span>{{ item.name }}</span>
          </div>
          <div>
            <b-icon icon="chevron-right" style="width: 100%;"/>
          </div>
        </div>
      </template>
      <category :item="item"></category>
    </b-tab>
  </b-tabs>
</template>

<script>
import {mapGetters,} from "vuex";
import Category from "@/components/header/category";

export default {
  components: {Category},
  computed: {
    ...mapGetters(['drop_bar'])
  },
};
</script>

<style scoped lang="scss">

.header {
  font-size: large;
  font-weight: 600;
  margin-bottom: 1.4rem;
}

.scoped-sidebar {
  width: 30%;
}

.scoped-sidebar span:hover {
  color: var(--violet);
}

.nav-tabs {
  height: 100%;
}
</style>