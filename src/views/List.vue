<template>
	<div class="list">
		<ul>
			<li v-for="(item,index) in product" v-text="item.title" ></li>
		</ul>
		<bottom></bottom>
	</div>
	
</template>

<script>
	import Bottom from "@/components/Footer"
	import axios from "axios"
	export default {
		data(){
			return{
				product:[],
			}
		},
		name: 'list',
		components: {
			Bottom
		},
		mounted(){
			axios.get("./data.json").then(res=>{
				console.log(res);
				this.product=res.data
			}).catch(err=>{})
		}
		
	}
</script>

<style>
</style>