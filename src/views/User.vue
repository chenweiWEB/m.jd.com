<template>
	<div class="user">
		<header>
			<i class="fa fa-angle-left"></i>
			<span class="title">京东登录</span>
		</header>
		<form action="#" method="post">
			<div class="input-container">
				<input type="text" id="username" placeholder="用户名/邮箱/已验证手机" value="" />
			</div>
			<div class="input-container">
				<input type="password" id="userpassword" placeholder="请输入密码" value="" />
			</div>
			
				
			<input type="submit" id="btn" value="登录" />
			
		</form>
		<div class="quick-nav">
			<router-link to="/">
				<span class="tips">短信验证登录</span>
			</router-link >
			<router-link to="/">
				<span class="zhuce">手机快速注册</span>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'user',
		data(){
			return{}
				
		},
		methods:{
//			onsubmit=function(){
//				
//				if(usernameInput.value=="admin"%&&userpassword.value=="admin"}{
//					alert("登陆成功！")
//				}else{
//					alert("登录失败！")
//				}
//			}
			
		},
		components: {

		}
	}
</script>

<style>
	.user {
		width: 100%;
		height: 44px;
		line-height: 44px;
		position: relative;
	}
	
	.user .fa {
		font-size: 30px;
		line-height: 44px;
		width: 44px;
		text-align: center;
	}
	
	.user .title {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		font-size: 16px;
		width: 100%;
		margin-left: 44px;
		height: 44px;
		line-height: 44px;
		text-align: center;
	}
	
	#username,
	#userpassword {
		width: 100%;
		border: none;
		margin-top: 2px;
		color: #222;
		font-size: 16px;
		padding: 0 10px 10px;
		border-bottom: 1px solid #efefef;
	}
	
	#btn {
		margin-top: 30px;
		width: 100%;
		height: 50px;
		line-height: 50px;
		display: block;
		border: none;
		background-color: #efefef;
		border-radius: 25px;
		font-size: 16px;
		color: #fff;
		background-image: linear-gradient(90deg, #fab3b3, #ffbcb3 73%, #ffcaba);
		/*box-shadow: 10px 10px 0 rgba(255, 62, 62, .2);*/
		text-align: center;
		font-family: PingFangSC-Semibold;
	}
	.quick-nav{
		margin-top: 10px;
		position: relative;
		/*background-color: red;*/
	}
	.quick-nav .tips{
		color: #999;
		line-height: 22px;
		font-family: PingFangSC-Semibold;
		position: absolute;
		left: 15px;
	}
	.quick-nav .zhuce{
		color: #999;
		/*background-color: blue;*/
		line-height: 22px;
		font-family: PingFangSC-Semibold;
		position: absolute;
		right: 15px;
	}
</style>