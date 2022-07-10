import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.prototype.$http=axios;
// Vue.prototype.$apiUrl="http://192.168.20.57:4000";
Vue.prototype.$apiUrl="";

new Vue({
  render: h => h(App),
}).$mount('#app')
