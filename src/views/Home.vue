<template>
	<div class="home">
		<search-bar></search-bar>
		<swiper></swiper>
		<quick-nav></quick-nav>
		<product></product>
		<bottom></bottom>
	</div>
</template>

<script>
	
	import SearchBar from "@/components/SearchBar"
	import Swiper from "@/components/Swiper.vue"
	import QuickNav from "@/components/QuickNav"
	import Product from "@/components/Product"
	
	import Bottom from "@/components/Footer"
	export default {
		name: 'home',
		components: {
			SearchBar,
			Swiper,
			QuickNav,
			Product,
			Bottom
		}
	}
</script>

<style>

</style>