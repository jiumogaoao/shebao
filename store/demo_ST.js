import Vue from 'vue'
import { Base64 } from 'js-base64';
export default {
	namespaced: true,
	state: {
		html:'',
		vcPic:''
	},
	mutations: {
		setHtml(state,data){
			state.html = Base64.decode(data)
		},
		needVerificationCode(state, data){
			console.log(data)
			state.vcPic = data
		}
	},
	actions: {
		setHtml(context, data){
			context.commit("setHtml",data)
		},
		needVerificationCode(context, data){
			context.commit("needVerificationCode",data)
		}
	},
}