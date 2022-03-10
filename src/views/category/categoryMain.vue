<template>
  <router-view></router-view>
</template>
<script>
import {mapMutations} from "vuex";

export default {
  methods: {
    ...mapMutations([
      'closeCategoryOpened'
    ]),
  },
  created() {
    this.$watch(
        () => this.$route.params,
        () => {
          this.closeCategoryOpened();
        },
        // fetch the data when the view is created and the data is
        // already being observed
        {immediate: true}
    )

  },
}
</script>