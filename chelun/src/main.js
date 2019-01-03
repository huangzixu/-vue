import Vue from 'vue'
import App from './App.vue'

//引入vant
import { Popup,Picker } from 'vant';

Vue.use(Popup);
Vue.use(Picker);

new Vue({
  el: '#app',
  render: h => h(App)
})
