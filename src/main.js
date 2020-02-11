import Vue from "vue";
import App from "./App.vue";
import VueGitHubButtons from "vue-github-buttons";
import VueResource from "vue-resource";
import VueSimpleMarkdown from "vue-simple-markdown";
import "vue-simple-markdown/dist/vue-simple-markdown.css";
import "vue-github-buttons/dist/vue-github-buttons.css";
Vue.use(VueGitHubButtons);
Vue.use(VueResource);
Vue.use(VueSimpleMarkdown)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
