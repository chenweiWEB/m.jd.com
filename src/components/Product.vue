<template>
	<div class="product-list">
		<div class='product' v-for="(item,index) in products">
			<a :href='item.id'>
				<div class='product-image'><img :src='item.image'></div>
				<div class='product-title' v-text='item.title'></div>
				<div class='product-info'>
					<div class='product-price'>￥<span v-text='item.price'></span></div>
					<div class='product-similar'><button v-text='item.similar'></button></div>
				</div>
				<div class='similar-info'></div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				products: [
					{

						title: "【5双装】纯棉袜子女韩版短筒袜女士船袜潮流船棉袜隐形袜子一件 特价拉新 颜色随机 均码",
						image: require("../assets/images/1.jpg"),
						price: 12.5,

						id: 1
					},
					{

						title: "【5双装】纯棉袜子女韩版短筒袜女士船袜潮流船棉袜隐形袜子一件 特价拉新 颜色随机 均码",
						image: require("../assets/images/1.jpg"),
						price: 12.5,

						id: 1
					},
					{

						title: "【5双装】纯棉袜子女韩版短筒袜女士船袜潮流船棉袜隐形袜子一件 特价拉新 颜色随机 均码",
						image: require("../assets/images/1.jpg"),
						price: 12.5,
						id: 1
					},
					{

						title: "【5双装】纯棉袜子女韩版短筒袜女士船袜潮流船棉袜隐形袜子一件 特价拉新 颜色随机 均码",
						image: require("../assets/images/1.jpg"),
						price: 12.5,
						id: 1
					}

				]
			}
		}
	}
</script>

<style>
	.clear:after {
		display: block;
		content: "";
		clear: both;
	}
	
	.product {
		width: 50%;
		float: left;
		padding-right: 2px;
		padding-bottom: 4px;
		box-sizing: border-box;
	}
	
	.product:nth-child(2n) {
		padding-right: 0px;
		padding-left: 2px;
	}
	
	.product-image img {
		width: 100%;
	}
	
	.product a {
		display: block;
		text-decoration: none;
		background-color: #fff;
	}
	
	.similar-info {
		height: 30px;
	}
	
	.product-title {
		box-sizing: border-box;
		height: 31px;
		font-size: 13px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-word;
		color: #232326;
		margin-top: 5px;
		line-height: 16px;
		margin-bottom: 3px;
		padding: 0 4px;
		background-color: #fff;
	}
	
	.product-price {
		color: #f23030;
		display: inline-block;
		padding: 0 5px 0 4px;
		position: relative;
		top: 1px;
		height: 25px;
		line-height: 25px;
	}
</style>