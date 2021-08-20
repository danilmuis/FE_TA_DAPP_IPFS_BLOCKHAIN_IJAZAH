// =========================================================
// * Vue Material Dashboard - v1.4.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/vue-material-dashboard/blob/master/LICENSE.md)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import Vuelidate from 'vuelidate'
// router setup
import routes from "./routes/routes";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";
import {Plugin} from "vue-fragment";
import 'vue2-dropzone/dist/vue2Dropzone.min.css';

import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';

// ============================
import VueSession from 'vue-session';
Vue.use(VueSession);
//=============================

// configure router
const router = new VueRouter({
  mode: 'history',
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active"
});
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Toasted from 'vue-toasted'
// import axios from 'axios';
// import VueAxios from 'vue-axios';
// axios.defaults.withCredentials = true;
// Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.prototype.$Chartist = Chartist;
Vue.use(Vuelidate)
Vue.use(VueRouter);
Vue.use(Plugin);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);
Vue.use(Vuesax);

Vue.use(Toasted, {
  duration: 2000,
  position: 'top-right',
  theme: "outline",
  icon : 'check_circle',
  action : {
    text : 'X',
    onClick : (e, toastObject) => {
        toastObject.goAway(0);
    }
  }
});
/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
  }
});
