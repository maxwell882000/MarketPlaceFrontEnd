import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSplide from '@splidejs/vue-splide';
import BootstrapVue3 from 'bootstrap-vue-3'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {createVueWait} from 'vue-wait'
import VueClickAway from "vue3-click-away";
// bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
// global scss
import "./fonts.scss";
import "./styles.scss";
import "./override.scss";

const VueWait = createVueWait({useVuex: true, registerDirective: true})
createApp(App)
    .use(store)
    .use(router)
    .use(VueClickAway)
    .use(VueSplide)
    .use(VueWait)
    .use(BootstrapVue3)
    .use(VueAxios, axios)
    .mount("#app");

