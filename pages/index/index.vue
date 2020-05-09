<template>
	<view class="content">
		<view>用户名:</view>
		<input v-model="user"/>
		<view>密码:</view>
		<input v-model="password"/>
		<button @tap="go">一键登录</button>
		<view v-if="html" v-html="html"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:"",
				password:"",
				html:"",
				websock: null
			}
		},
		mounted(){
			this.initWebSocket();
		},
		onLoad() {

		},
		methods: {
			initWebSocket(){ //初始化weosocket
			        const wsuri = "ws://127.0.0.1:3000";
			        this.websock = new WebSocket(wsuri);
			        this.websock.onmessage = this.websocketonmessage;
			        this.websock.onopen = this.websocketonopen;
			        this.websock.onerror = this.websocketonerror;
			        this.websock.onclose = this.websocketclose;
			      },
			      websocketonopen(){ //连接建立之后执行send方法发送数据
			        let actions = {"test":"12345"};
			        this.websocketsend(actions);
			      },
			      websocketonerror(){//连接建立失败重连
			        this.initWebSocket();
			      },
			      websocketonmessage(e){ //数据接收
			        var redata;
					try{
						redata = JSON.parse(e.data);
					}catch(error){
						this.html = e.data
					}
					console.log(redata)
			      },
			      websocketsend(Data){//数据发送
			        this.websock.send(JSON.stringify(Data));
			      },
			      websocketclose(e){  //关闭
			        console.log('断开连接',e);
			      },
			go(){
				this.websocketsend({action:"login",data:{user:this.user,password:this.password}})
				// uni.request({
				// 		url: 'http://localhost:3000', //仅为示例，并非真实接口地址。
				// 		data: {user:this.user,password:this.password},
				// 		timeout:200000,
				// 		success:function(rsp){
				// 			console.log(rsp)
				// 		}
				// 		})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	*{font-size: 12px;}
	input{border: 1px solid #ddd;}
</style>
