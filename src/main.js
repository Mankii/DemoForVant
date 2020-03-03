import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 图片懒加载
import { Lazyload } from 'vant';
Vue.use(Lazyload, {
	lazyComponent: true // 注册时可以配置额外的选项
});


// 将touch事件兼容桌面端的mouse事件（手机端时不需要这个）
import '@vant/touch-emulator';


// 公共组件
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
