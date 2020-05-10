import Vue from 'vue'
import { Base64 } from 'js-base64';
export default {
	namespaced: true,
	state: {
		html:'',
	},
	mutations: {
		setHtml(state,data){
			state.html = Base64.decode(data)
		}
	},
	actions: {
		setHtml(context, data){
			context.commit("setHtml",data)
		}
	},
}