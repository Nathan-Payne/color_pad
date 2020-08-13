import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
  // eslint-disable-next-line prettier/prettier
  render: (h) => h(App),
}).$mount("#app");
