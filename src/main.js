import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './registerServiceWorker'

import './plugins/vue-bootstrap'
import './plugins/vue-fontawesome'
import './plugins/vue-google-maps'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
