<template>
	<div class="quick-nav clear">
		<div class='quick-nav-item' v-for="(nav,index) in quickNavs">
			<a href='#'>
				<img :src='nav.image'>
				<span v-text='nav.title'></span>
			</a>
		</div>
	</div>

</template>

<script>
	
	/**
	 * 
	 * 1. 通过for循环遍历的资源路径必须是绝对路径才可以渲染成功。
	 * 
	 * 2. 如果非要用相对路径(也就是assets问价中的东西)，那么可以使用require的方式引入资源也可以成功
	 * 
	 * **/
	
	export default {

		data() {
			return {
				quickNavs: [{
					title: '京东超市',
					image:  require('../assets/images/1.png')
				}, {
					title: '京东超市',
					image:  require('../assets/images/2.png')
				}, {
					title: '京东超市',
					image:  require('../assets/images/3.png')
				}, {
					title: '京东超市',
					image:  require('../assets/images/4.png')
				}, {
					title: '京东超市',
					image:  require('../assets/images/5.png')
				}, {
					title: '京东超市',
					image:  require('../assets/images/6.png')
				}, {
					title: '京东超市',
					image:  require('../assets/images/7.png')
				}, {
					title: '京东超市',
					image:  require('../assets/images/8.png')
				}, {
					title: '京东超市',
					image:  require('../assets/images/9.png')
				}, {
					title: '京东超市',
					image: require('../assets/images/10.png')
				}]
			}
		}

	}
</script>

<style scoped>
	.clear:after {
		display: block;
		content: "";
		clear: both;
	}
	
	.quick-nav {
		background-color: #fff;
	}
	
	.quick-nav-item {
		padding-top: 10px;
		width: 20%;
		float: left;
		text-align: center;
	}
	
	.quick-nav-item a {
		text-decoration: none;
	}
	
	.quick-nav-item img {
		width: 42px;
		height: 42px;
	}
	
	.quick-nav-item span {
		display: block;
		color: #666;
		margin-top: 6px;
		font-size: 13px;
	}
</style>