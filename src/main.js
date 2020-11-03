import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faAmazon } from "@fortawesome/free-brands-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import NowUiKit from "./plugins/now-ui-kit";

library.add(faFacebook, faAmazon, faCalendar);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.use(NowUiKit);
new Vue({
  render: h => h(App)
}).$mount("#app");
