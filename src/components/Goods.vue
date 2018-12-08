<template>
	<div class="good-list">
		<div class="inner">
			<img src="../assets/images/phone.jpg" />
		</div>
		<div class="good-name">
			<i>OPPO Find X【送智能手环】6期免息 双曲面全景屏手机 全隐藏式3D摄像头 波尔多红 8G+128G 官网标配</i>
			<div>
				<i>￥4999.00</i>
				<span>降价提醒</span>
			</div>
		</div>
		<div class="desc_list">
			
		</div>
		<div style="height: 1000px;"></div>
		<footer>
			<ul>
				<li class="f">
					<i class="fa fa-hard-of-hearing"></i>
					<span>联系客服</span>
				</li>
				<li class="f">
					<i class="fa fa-shopping-basket"></i>
					<span>进店</span>
				</li>
				<li class="f">
					<i class="fa fa-shopping-cart"></i>
					<span>购物车</span>
				</li>
				<li class="cart">
					<span>加入购物车</span>
				</li>
				<li class="buy">
					<span>立即购买</span>
				</li>
			</ul>

		</footer>

	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style>
	.good-list {
		margin: 0;
		padding: 0;
	}
	
	.good-list .inner {
		width: 100%;
		position: relative;
	}
	
	.good-list .inner img {
		position: absolute;
		top: 5px;
		left: 0;
		width: 100%;
	}
	
	.good-list .inner span {
		position: absolute;
		top: 200px;
	}
	
	.good-list .good-name {
		position: relative;
		top: 350px;
		width: 100%;
		height: 90px;
		/*background-color: red;*/
	}
	
	.good-list .good-name img {
		width: 36px;
		height: 15px;
		position: absolute;
		top: 5px;
		left: 5px;
	}
	
	.good-list .good-name i {
		position: absolute;
		left: 2px;
		font-size: 14px;
		height: 28px;
		padding: 5px 2px;
		text-indent: 2em;
		text-align: left;
		line-height: 18px;
	}
	
	.good-list .good-name div span {
		position: absolute;
		right: 0px;
		bottom: 0px;
		font-size: 12px;
		border-radius:8px;
		padding: 2px;
		line-height: 20px;
		border: 1px solid #CCCCCC;
	}
	
	.good-list .good-name div i {
		position: absolute;
		left: -5px;
		bottom: -10px;
		color: #e4393c;
	}
	
	
	.good-list footer {
		width: 100%;
		height: 50px;
		line-height: 50px;
		position: fixed;
		bottom: 0;
		left: 0;
		color: #353535;
		text-align: center;
	}
	
	.good-list footer ul {
		margin: 0;
		padding: 0;
		display: flex;
		display: -webkit-flex;
	}
	
	.good-list footer ul .f {
		width: 45px;
		height: 50px;
		font-size: 12px;
	}
	
	.good-list footer ul .cart {
		flex: 1;
		color: #FFFFFF;
		background-color: #ffab2d;
		height: 50px;
	}
	
	.good-list footer ul .buy {
		flex: 1;
		color: #FFFFFF;
		height: 50px;
		background-color: #f73700;
	}
	
	.good-list footer ul li i.fa {
		margin-top: 5px;
		margin-bottom: -10px;
		font-size: 14px;
		display: block;
	}
	
	.good-list footer ul li span {
		font-size: 14px;
	}
</style>