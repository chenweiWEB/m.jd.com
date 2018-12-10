<template>
	<div class="user">
		<top-bar>我的京东</top-bar>
		<div class="user_ico">
			<div class="userinfo">
				<div class="avater">用户头像</div>
				<div class="name-inner">
					<div class="name-inner1">jd_176211nvgt</div>
					<div class="name-inner2">用户名：jd_5d7c73303db98</div>
				</div>
				<div class="account">
					账号管理
				</div>
			</div>
			<div class="top_line_box">
				<div class="unplay">
					<div class="text">
						待付款
					</div>
				</div>
				<div class="unrecieve">
					<div class="text">
						
						待收货
					</div>
				</div>
				<div class="sonsolt">
						<div class="text">
							
							退换/售后
						</div>
				</div>
				<div class="orders">
						<div class="text">
							
							全部订单
						</div>
				</div>
			</div>
			<div class="top_line_box">
				<div class="juan">
					<span>1张</span>
					<div class="text">
						
						京东卷
					</div>
				</div>
				<div class="baitiao">
					<span>开通有礼</span>
					<div class="text">
						
						白条
					</div>
				</div>
					<div class="jingdou">
						<span>0个</span>
						<div class="text">
							
							京豆
						</div>
				</div>
				<div class="lipin">
					<span>0张</span>
					<div class="text">
						
						礼品卡
					</div>
				</div>
				<div class="zichan">
					<div class="text">
						
						我的资产
					</div>
				</div>
			</div>
			<div class="top_line_box">
				<div class="shangpin">
					<span>0</span>
					<div class="text">
						商品收藏
					</div>
				</div>
				<div class="dianpu">
					<span>0</span>
					<div class="text">
						店铺收藏
					</div>
				</div>
				<div class="wode">
					<span>0</span>
					<div class="text">
						我的足迹
					</div>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	import TopBar from '@/components/TopBar'
	export default {
		data() {
			return{
				
			}
		},
		components: {
			TopBar,
		}
	}
</script>

<style>
	.user{
		/*background-color: #f7f7f7;*/
	}
	.user_ico {
		background-color: #fff;
		padding: 10px;
	}
	
	.userinfo {
		height: 120px;
		position: relative;
		width: 100%;
		background-color: #ef4641;
		border-radius: 10px 10px 0 10px;
		box-shadow: 0 2px 4px rgba(228, 57, 60, .4);
	}
	
	.userinfo .avater {
		position: absolute;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		color: #FFFFFF;
		font-size: 12px;
		text-align: center;
		line-height: 60px;
		background-color: darkcyan;
		top: 30px;
		left: 10px;
	}
	
	.name-inner {
		position: absolute;
		top: 30px;
		left: 80px;
		/*background-color: red;*/
	}
	
	.name-inner .name-inner1 {
		font-size: 16px;
		color: #FFFFFF;
		top: 0;
		height: 16px;
		line-height: 16px;
	}
	
	.name-inner .name-inner2 {
		font-size: 14px;
		color: #CCCCCC;
	}
	
	.userinfo .account {
		position: absolute;
		top: 10px;
		right: 20px;
		color: rgba(76, 0, 0, .7);
		font-size: 12px;
	}
	.top_line_box{
		display: flex;
		width: 100%;
		height: 60px;
		background-color: #CCCCCC;
		margin-top: 10px;
		position: relative;
		text-align: center;
		line-height: 60px;
	}
	.top_line_box span{
		position: absolute;
		top: -10px;
		text-align: center;
		line-height: 60px;
		color: red;
		margin-left: -15px;
	}
	.top_line_box .text{
		position: relative;
		top:20px ;
		font-size: 12px;
		
	}
	.top_line_box .unplay{
		flex: 1;
		background: url(../assets/images/unplay.png) no-repeat center top;
		background-size: 40px 40px;
		
		
	}
	.top_line_box .unrecieve{
		flex: 1;
		background: url(../assets/images/unplay.png) no-repeat center top;
		background-size: 40px 40px;
	}
	.top_line_box .sonsolt{
		
		flex: 1;
		background: url(../assets/images/unplay.png) no-repeat center top;
		background-size: 40px 40px;
	}
	.top_line_box .orders{
		background: url(../assets/images/unplay.png) no-repeat center top;
		background-size: 40px 40px;
		flex: 1;
	}
	.top_line_box .juan{
		flex: 1;
	}
	.top_line_box .baitiao{
		flex: 1;
	}
	.top_line_box .jingdou{
		flex: 1;
	}
	.top_line_box .lipin{
		flex: 1;
	}
	.top_line_box .zichan{
		flex: 1;
	}
	.top_line_box .shangpin{
		flex: 1;
	}
	.top_line_box .dianpu{
		flex: 1;
	}
	.top_line_box .wode{
		flex: 1;
	}
</style>