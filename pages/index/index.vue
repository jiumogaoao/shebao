<template>
	<view class="content">
		<view>用户名:</view>
		<input v-model="user"/>
		<view>密码:</view>
		<input v-model="password"/>
		<button @tap="go">一键登录</button>
		<view v-if="html" v-html="html"></view>
		<image :src="vcPic"></image>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				user:"",
				password:""
			}
		},
		mounted(){
			
		},
		onLoad() {

		},
		computed:{
			html(){
				return this.$store.state.demoST.html
			},
			vcPic(){
				return this.$store.state.demoST.vcPic
			}
		},
		methods: {
			go(){
				this.$store.dispatch("sockST/websocketsend",{action:"login",data:{user:this.user,password:this.password}})
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
