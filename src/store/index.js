import Vue from 'vue'
import Vuex from 'vuex'

import Hospital from './modules/Hospital'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Hospital
  }
})
