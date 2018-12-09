<template>
	<div class="admin">
		<header>
			<router-view name="header"></router-view>
		</header>
		<aside>
			<router-view name="asider"></router-view>
		</aside>
		<div class="conent"> 
		<router-view></router-view>
		</div>
	</div>
</template>

<script>
</script>

<style>
	html,body,#app{
		height: 100%;
	}
	.admin{
		width: 100%;
		height: 100%;
	}
	.admin header{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 60px;
		border-bottom: 1px solid #CCCCCC;
	}
	.admin aside{
		width: 260px;
		height: 100%;
		position: fixed;
		top: 60px;
		left: 0;
		border-right: 1px solid #CCCCCC;
	}
	.admin .conent{
		width: 100%;
		height: 100%;
		padding-top: 60px;
		padding-left: 260px;
	}
</style>