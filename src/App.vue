<template>
  <div class="body d-flex flex-column justify-content-between">
    <div>
      <AppHeader v-show="show"/>
      <router-view/>
    </div>
    <AppFooter v-show="show"/>
  </div>
</template>

<script>
import AppHeader from "./components/header/App-Header";
import AppFooter from "./components/App-Footer";
import {mapActions, mapGetters, mapState} from "vuex";


export default {
  components: {AppFooter, AppHeader},
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
  computed: {
    ...mapGetters({
      show: "mainModule/showFooterAndHeader"
    }),
    ...mapState({
      token: state => state.token
    }),
  },
  methods: {
    ...mapActions({
      getUser: 'getUser',
      getHeader: 'getHeaders',
      countDownSecond: "mainModule/countDownSecond"
    }),
  },
  created() {
    this.getUser();
    this.getHeader();
  },
  mounted() {
    window.setInterval(() => {
      this.countDownSecond();
    }, 1000);
  }
}
</script>
<style scoped>
.body {
  min-height: 100vh;
}
</style>

