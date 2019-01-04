import Vue from 'vue'
import App from './App.vue'
import store from './store/index';
//引入vant
import { Popup,Picker } from 'vant';

Vue.use(Popup);
Vue.use(Picker);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
