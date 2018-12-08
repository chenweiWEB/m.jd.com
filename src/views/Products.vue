<template>
	<div class="goods-item">
		<top-bar>
		
		<router-link :to="'/product/'+id+'/goods'">商品</router-link>
		<router-link :to="'/product/'+id+'/detail'">详情</router-link>
		<router-link :to="'/product/'+id+'/evaluation'">评价</router-link>
		<router-link :to="'/product/'+id+'/recommend'">推荐</router-link>
		<router-view/>
		</top-bar>
	</div>
</template>

<script>
	import TopBar from '@/components/TopBar'
	export default {data(){
			return{
				id:0,
			};
		},created(){
			this.id = this.$route.params.id;
		},
		
		components:{
			TopBar,
		}
	}
</script>

<style>
	.goods-item a{
		margin: 0 10px;
	}
</style>