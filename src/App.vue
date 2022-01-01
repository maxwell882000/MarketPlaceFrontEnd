<template>
  <div>
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>
<script>
  import AppHeader from "./components/header/App-Header";
  import AppFooter from "./components/App-Footer";
  export default {
    components: { AppFooter, AppHeader },
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }
</script>