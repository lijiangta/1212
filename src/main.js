import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";

Vue.prototype.$bus = new Vue();//事件总线
Vue.config.productionTip = false

new Vue({
  el:"#app",
  router,
  store,
  render: h => h(App),
})

