<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"/>
  <div>
    <AppHeader/>
    <router-view/>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from "./components/header/App-Header";
import AppFooter from "./components/App-Footer";
import {mapActions, mapState} from "vuex";


export default {
  components: {AppFooter, AppHeader},
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
  computed: {
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
    this.getHeader();
  },
  mounted() {
    window.setInterval(() => {
      this.countDownSecond();
    }, 1000);
  }
}
</script>