import Vue from "vue";
import App from "./App.vue";
import NowUiKit from "./plugins/now-ui-kit";

Vue.config.productionTip = false;

Vue.use(NowUiKit);
new Vue({
  render: h => h(App)
}).$mount("#app");
