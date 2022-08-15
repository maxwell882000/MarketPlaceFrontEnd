<template>
  <ResponsiveLayout>
    <template #desktop>
      <div class="body d-flex flex-column justify-content-between">
        <div>
          <AppHeader v-show="show"/>
          <router-view/>
        </div>
        <AppFooter v-show="show"/>
      </div>
    </template>
    <template #mobile>
      <div class="d-flex flex-column" style="height: 100vh!important;">
        <AppHeader v-show="show"></AppHeader>
        <div class="remove-scroll h-100" style="overflow: scroll">
          <router-view></router-view>
          <div class="py-4">

          </div>
        </div>

        <AppFooter v-show="show">

        </AppFooter>
      </div>
    </template>
  </ResponsiveLayout>
  <show-alert></show-alert>
</template>

<script>
import AppHeader from "./components/header/App-Header";
import AppFooter from "./components/footer/App-Footer";
import {mapActions, mapGetters, mapState} from "vuex";
import ShowAlert from "@/components/alerts/showAlert";
import ResponsiveLayout from "@/components/responsive/ResponsiveLayout";


export default {
  components: {ResponsiveLayout, ShowAlert, AppFooter, AppHeader},
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
<style lang="scss">
@media (min-width: 769px) {
  .sales-roll {
    .splide__list {
      width: 110%;
      padding-top: 1.2rem !important;
      padding-bottom: 1.2rem !important;

      .splide__slide {
        margin-right: 20px !important;
      }

    }

    @media (max-width: 1024px) {
      .splide__list {
        width: 120%;
      }
    }
  }
}

</style>
