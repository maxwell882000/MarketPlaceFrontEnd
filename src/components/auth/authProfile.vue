<template>
  <div @click="open()" id="cities" :data-bs-toggle="isAuthenticated && 'dropdown'" aria-expanded="false">
    <slot></slot>
  </div>
  <ul v-show="isAuthenticated" class="dropdown-menu" aria-labelledby="cities">
    <b-dropdown-item @click="toProfile()">
      <router-link style="text-decoration: none; color: inherit;" :to="{path: '/user'}">
        <span class="text-font">Профиль</span>
      </router-link>
    </b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item @click="exitAccount">
      <span class="text-font">Выйти</span></b-dropdown-item>
  </ul>
</template>
<script>

import {mapGetters, mapMutations, mapActions, mapState} from "vuex";

export default {
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
    async exitAccount() {
      await this.logout();
    },
    toProfile() {
      // this.getUser();
      this.$router.push("/user");
    }
  }
}
</script>
