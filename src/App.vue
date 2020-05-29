<template>
  <div class="content">
		<div>用户名:</div>
		<input v-model="user"/>
		<div>密码:</div>
		<input v-model="password"/>

      <input ref="upload" type="file" name="file" id="file" value="" multiple="multiple" @change='upload'/>

		<button @click="go">一键登录</button>
		<div v-if="html" v-html="html"></div>
		<image :src="vcPic"></image>
	</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data(){
    return {
      user:"",
				password:""
    }
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
      upload(){
        let that = this;
        var a = this.$refs.upload.files[0];
        var formdata = new FormData();
        console.log(formdata);
        formdata.append('file',a);
        axios.post('http://127.0.0.1:3000/upload',formdata).then(function(response){
          console.log(response)
        }).catch(function(error){
          console.log(error)
        })

      },
			go(){debugger;
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
