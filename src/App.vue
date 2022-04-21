<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"/>
  <div>
    <AppHeader v-show="show"/>
    <router-view/>
    <AppFooter v-show="show"/>
  </div>
</template>

<script>
import AppHeader from "./components/header/App-Header";
import AppFooter from "./components/App-Footer";
import {mapActions, mapGetters, mapState} from "vuex";


export default {
  // eslint-disable-next-line vue/no-unused-components
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