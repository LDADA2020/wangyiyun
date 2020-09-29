import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.prototype.$http = axios;
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Mint);

new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
}).$mount("#app");
