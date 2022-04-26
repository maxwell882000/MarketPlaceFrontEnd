<template>
  <div class="container pt-3 pb-5">
    <badge :path="path"/>
    <b-tabs
        pills
        card
        vertical
        v-model="currentTab"
        nav-wrapper-class="bg-transparent border-0 w-30"
        active-nav-item-class="bg-white transparent-nav-active"
        class="user-tabs">
      <b-tab
          lazy
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
  </div>
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
import {watch} from "vue";

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
        title: "Оплата",
        icon: "credit-card-fill",
      },
      {
        pathName: "documents",
        title: "Мои документы",
        icon: "file-earmark-text-fill",
      },
      {
        pathName: "notification",
        title: "Уведомления",
        icon: "bell-fill",
      },
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
        if (e.pathName === this.$route.name) {
          this.currentTab = i;
        }
      });
    },
    currentTab(val) {
      this.tabs.forEach((e, i) => {
        if (i === val)
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
    setCorrectTab() {
      this.tabs.forEach((e, i) => {
            if (e.pathName === this.$route.name) {
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
    watch(() => this.$router, function () {

    });
    this.getPurchases();
    this.getCard();
  },
  unmounted() {
    this.cleanCard();
  }
};
</script>

<style scoped>
.container {
  min-height: 800px;
}
</style>