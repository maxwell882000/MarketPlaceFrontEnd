<template>
  <b-tabs
      pills
      vertical
      nav-wrapper-class="bg-white left-tabs"
      class="nav-tabs"
      active-nav-item-class="bg-light text-violet"
      active-tab-class="text-uppercase text-dark"
  >
    <b-tab v-for="item in drop_bar" :key="item.slug">
      <template #title>
        {{ item.name }}
      </template>
      <b-card-text>Tab contents 1</b-card-text>
    </b-tab>

  </b-tabs>
</template>

<script>


import {mapGetters,} from "vuex";

export default {
  components: {},
  computed: {
    ...mapGetters(['drop_bar'])
  },
};
</script>

<style scoped>
.nav-tabs {
  height: 100%;
}
</style>