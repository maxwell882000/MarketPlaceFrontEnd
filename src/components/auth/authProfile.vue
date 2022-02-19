<template>
  <slot @click="openLogin()"></slot>
  <div>
    <Login v-show="showLogin"></Login>
  </div>
</template>
<script>
import Login from "@/components/auth/login/login";

export default {
  components: {Login},
  data() {
    return {
      showLogin: false
    }
  },
  methods: {
    openLogin(){
      this.showLogin = true;
    }
  }
}
</script>