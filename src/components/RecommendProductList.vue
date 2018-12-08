<template>

	<div class="product-list clear">
		<div class='product' v-for="(item,index) in products">
			<a :href='item.id'>
				<div class='product-image'>
					<img :src='item.image'>
				</div>
				<div class='product-title' v-text='item.title'></div>
				<div class='product-info'>
					<div class='product-price'>￥<span v-text='item.price'></span></div>
					<div class='product-similar'></div>
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
				products: [{
					title: '南方（精装）600g 黑芝麻糊 冲饮谷物 营养早餐  即食 黑芝麻糊',
					image: require('../assets/images/product_1.jpg'),
					price: 27.99,
					id: 2
				}, {
					title: '满199减120_百草味 芒果干120g 休闲零食水果干小吃蜜饯果脯 MJ',
					image: require('../assets/images/product_2.jpg'),
					price: 25,
					id: 1
				}, {
					title: '南方（精装）600g 黑芝麻糊 冲饮谷物 营养早餐  即食 黑芝麻糊',
					image: require('../assets/images/product_1.jpg'),
					price: 27.99,
					id: 2
				}, {
					title: '满199减120_百草味 芒果干120g 休闲零食水果干小吃蜜饯果脯 MJ',
					image: require('../assets/images/product_2.jpg'),
					price: 25,
					id: 1
				}, {
					title: '南方（精装）600g 黑芝麻糊 冲饮谷物 营养早餐  即食 黑芝麻糊',
					image: require('../assets/images/product_1.jpg'),
					price: 27.99,
					id: 2
				}]
			};
		}
	}
</script>

<style>
	img {
		border: 0 none;
		vertical-align: top;
	}
	
	.left {
		float: left;
	}
	
	.right {
		float: right;
	}
	
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
	
	.product a {
		background-color: #FFFFFF;
		display: block;
		text-decoration: none;
	}
	
	.product:nth-child(2n) {
		padding-right: 0px;
		padding-left: 2px;
	}
	
	.product-image img {
		width: 100%;
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
	
	.similar-info {
		height: 26px;
	}
</style>