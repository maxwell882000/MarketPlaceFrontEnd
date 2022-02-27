<template>
  <div @click="open()" id="cities" :data-bs-toggle="isAuthenticated && 'dropdown'" aria-expanded="false">
    <slot></slot>
  </div>
  <ul v-show="isAuthenticated" class="dropdown-menu" aria-labelledby="cities">
    <b-dropdown-item @click="toProfile()">
      <span class="text-font">Профиль</span>
    </b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item @click="exitAccount">
      <span class="text-font">Выйти</span></b-dropdown-item>
  </ul>
  <div>
    <Login></Login>
    <Registration></Registration>
    <ForgetPassword></ForgetPassword>
    <VerifyRegister></VerifyRegister>
    <VerifyForget></VerifyForget>
    <NewPassword></NewPassword>
  </div>

</template>
<script>
import Login from "@/components/auth/login/login";
import Registration from "@/components/auth/registration/regisration";
import {mapGetters, mapMutations, mapActions, mapState} from "vuex";
import ForgetPassword from "@/components/auth/forgetPassword/forgetPassword";
import VerifyRegister from "@/components/auth/registration/verifyRegister";
import VerifyForget from "@/components/auth/forgetPassword/verifyForget";
import NewPassword from "@/components/auth/forgetPassword/newPassword";


export default {
  components: {NewPassword, VerifyForget, VerifyRegister, ForgetPassword, Login, Registration},
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated',
    }),
    ...mapState({
      token: state => state.auth.token
    })

  },
  methods: {
    ...mapMutations({
      setLogin: "authWindow/setLogin",
    }),
    ...mapActions({
      logout: "logout",
      getUser: "getUser"
    }),
    open() {
      if (!this.isAuthenticated) {
        this.setLogin();
      }
    },
    exitAccount() {
      console.log(this.token);
      this.logout();
    },
    toProfile() {
      this.getUser();
    }
  }
}
</script>
