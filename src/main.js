import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSplide from '@splidejs/vue-splide';
import BootstrapVue3 from 'bootstrap-vue-3'

// global scss
import "./fonts.scss";
import "./styles.scss";
import "./override.scss";

// bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

createApp(App)
    .use(store)
    .use(router)
    .use(VueSplide)
    .use(BootstrapVue3)
    .mount("#app");