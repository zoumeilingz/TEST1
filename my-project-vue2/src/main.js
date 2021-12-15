import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import "es6-promise/auto";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import store from "./store/index";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$store = store;
Vue.use(ElementUI);

new Vue({
  store,
  axios,
  render: (h) => h(App),
}).$mount("#app");
