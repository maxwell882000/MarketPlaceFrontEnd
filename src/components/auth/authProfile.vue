<template>
  <div>
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

  </div>
<!--  <div class="absolute w-100 bg-white p-4 shadow-md rounded-st container-profile">-->
<!--    <div class="bg-color avatar-cont">-->
<!--      <b-avatar></b-avatar>-->
<!--      <div class="d-flex justify-content-between align-items-center">-->
<!--        <div>-->
<!--          <h6>name</h6>-->

<!--          <span>status <span class="bi bi-bookmark-x-fill"></span></span>-->
<!--        </div>-->
<!--        <div>-->

<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>
<script>

import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

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
      this.getUser();
      this.$router.push("/user");
    }
  }
}
</script>
<style>
.container-profile {
  padding: 0.571rem;
}

.avatar-cont {
  border-radius: 8px;
  padding: 0.786rem 1rem;
}
</style>

