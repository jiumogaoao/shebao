import Vue from 'vue'
export default {
	namespaced: true,
	state: {
		websock:'',
	},
	mutations: {
		init(state, data){
			const wsuri = "ws://127.0.0.1:3000/wx";
			let that = this
			state.websock = new WebSocket(wsuri);
			state.websock.onmessage = function(e){
				var redata = JSON.parse(e.data);
				if(redata.action){
					that.dispatch(redata.action,redata.data)
				}
			}
			state.websock.onopen = function(){
				that.dispatch("sockST/websocketsend",{action:"open",data:'openSuccess'})
			}
			state.websock.onerror = function(){
				console.log('wesocket error')
				that.dispatch("sockST/init")
			}
			state.websock.onclose = function(){
				console.log('wesocket close')
			}
		},
		websocketsend(state, data){
			state.websock.send(JSON.stringify(data));
		}
	},
	actions: {
		init(context, data){
			context.commit("init")
		},
		websocketsend(context, data){//数据发送
		 context.commit("websocketsend",data)
		},
		ready(context, data){
			console.log(data)
		}
	},
}