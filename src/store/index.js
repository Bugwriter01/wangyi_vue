import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import category from './modules/category'
import home from './modules/home'
import topic from './modules/topic'

Vue.use(Vuex)
export default new Vuex.Store({
  mutations,
  actions,
  getters,
  modules:{
    category,
    home,
    topic
  }
})

