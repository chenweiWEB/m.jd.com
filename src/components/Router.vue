<template>
	<div>
		
		<router-link to="/">首页</router-link>
		<router-link :to="{ path: '/search' }">搜索</router-link>
		<router-link :to="({path:'/user',params:{userID:123}})">个人中心</router-link>
		
		
		<button @click="$router.push('/')">1</button>
		<button @click="$router.push({path:'/search'})">2</button>
		<button @click="$router.push({path:'/search',params:{userID:123}})">3</button>
		<button>4</button>
		<button>5</button>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped="">
	button {
		padding: 20px;
		margin: 5px;
	}
</style>