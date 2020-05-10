import Vue from 'vue'
import Vuex from 'vuex'
import sockST from './sock_ST.js'
import demoST from './demo_ST.js'
Vue.use(Vuex)

let store = new Vuex.Store({
	state: {

	},
	modules: {
		sockST,
		demoST
	},
	mutations: {

	},
	actions: {

	}
})
store.dispatch("sockST/init")
export default store
