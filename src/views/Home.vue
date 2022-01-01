<template>
  <div class="container">
    <BannerAndItem />
  </div>
</template>

<script>

import BannerAndItem from "../components/mainPage/BannerAndItem";
import '@splidejs/splide/dist/css/splide.min.css';
export default {
  components: {BannerAndItem},
  data() {
    return {
      msg: "Welcome to Your Vue.js + TypeScript App",
    };
  }
}
</script>

<style scoped lang="scss">
  .container {
    padding: 24px 0;
  }
</style>
