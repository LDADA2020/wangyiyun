import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.prototype.$http = axios;

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
}).$mount("#app");
