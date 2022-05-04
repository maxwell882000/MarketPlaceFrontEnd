<template>
  <section class="container pt-3 pb-5">
    <badge :path="path"/>
    <b-tabs
        pills
        card
        vertical
        nav-class="user-sheet"
        v-model="currentTab"
        nav-wrapper-class="bg-transparent border-0 w-max"
        active-nav-item-class="bg-white transparent-nav-active text-nowrap"
        class="user-tabs">
      <b-tab lazy
             :key="'user_item_tab_' + index" v-for="(item , index) in tabs"
             title-link-class="transparent-tab-passive">
        <template #title>
          <div>
            <b-icon :icon="item.icon" scale="1.5" class="me-2"/>
            {{ item.title }}
          </div>
        </template>
        <router-view></router-view>
      </b-tab>
    </b-tabs>
  </section>
</template>

<script>
import Badge from "../../components/shared/Badge.vue";
import UserSettings from "../../components/userPage/settings/userSettings.vue";
import OrderUser from "@/components/userPage/orders/ordersUser";
import ChooseCard from "@/components/userPage/payments/chooseCard";
import Documents from "@/components/userPage/documents/documents";
import Notification from "@/components/userPage/notification/notification";
import Questions from "@/components/userPage/question/questions";
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  data: () => ({
    path: [
      {
        name: "Главная",
        path: "/",
      },
      {
        name: "Профиль",
        path: "/user",
      },
    ],
    currentTab: 3,
    tabs: [
      {
        pathName: "profile",
        title: "Пользователь",
        icon: "person-fill",
      },
      {
        pathName: "orders",
        title: "Мои заказы",
        icon: "bag-fill",
      },
      {
        pathName: "credit",
        secondName: "insert_card",
        title: "Оплата",
        icon: "credit-card-fill",
      },
      // {
      //   pathName: "documents",
      //   title: "Мои документы",
      //   icon: "file-earmark-text-fill",
      // },
      // {
      //   pathName: "notification",
      //   title: "Уведомления",
      //   icon: "bell-fill",
      // },
      {
        pathName: "questionAndAnswers",
        title: "Вопросы и ответы",
        icon: "chat-fill",
      },
    ]
  }),
  // eslint-disable-next-line vue/no-unused-components
  components: {Questions, Notification, Documents, ChooseCard, OrderUser, Badge, UserSettings},
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated"
    })
  },
  watch: {
    isAuthenticated(val) {
      if (!val) {
        this.$router.replace("/");
      }
    },
    $route() {
      this.tabs.forEach((e, i) => {
        if (this.check(e)) {
          this.currentTab = i;
        }
      });
    },
    currentTab(val) {
      this.tabs.forEach((e, i) => {
        if (i === val && e.secondName !== this.$route.name)
          this.$router.push({
            name: e.pathName
          })
      });
    }
  },
  methods: {
    ...mapActions({
      getPurchases: "purchaseModule/getPurchases",
      getCard: "plasticCardModule/getCards"
    }),
    ...mapMutations({
      cleanCard: "purchaseModule/clean"
    }),
    check(item) {
      return item.secondName === this.$route.name || item.pathName === this.$route.name
    },
    setCorrectTab() {
      this.tabs.forEach((e, i) => {
            if (this.check(e)) {
              this.currentTab = i;
            }
          }
      );
    },
  },
  created() {
    this.setCorrectTab();
    if (!this.isAuthenticated) {
      this.$router.replace("/");
    }
    this.getPurchases();
    this.getCard();
  },
  unmounted() {
    this.cleanCard();
  }
};
</script>
<style lang="scss">
.user-sheet {
  .nav-item {
    white-space: nowrap;
    min-width: min-content !important;
  }
}
</style>
<style scoped>
.container {
  min-height: 800px;
}
</style>