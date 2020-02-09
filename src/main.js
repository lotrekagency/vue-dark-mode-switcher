import Vue from 'vue'
import App from './App.vue'
import VueGitHubButtons from 'vue-github-buttons';
import 'vue-github-buttons/dist/vue-github-buttons.css';
Vue.use(VueGitHubButtons);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
