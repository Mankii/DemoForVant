import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import Page from './components/Pege.vue'
Vue.component('page', Page);
import dBlock from './components/dBlock.vue'
Vue.component('dBlock', dBlock);
import dRow from './components/dRow.vue'
Vue.component('dRow', dRow);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
