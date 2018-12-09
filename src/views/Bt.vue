<template>

	<div>
		 
		<date-picker v-model="date" :today-btn="false" :clear-btn="false"/>
		<btn>Default</btn>
		<btn type="primary">Primary</btn>
		<btn type="success">Success</btn>
		<btn type="info">Info</btn>
		<btn type="warning">Warning</btn>
		<btn type="danger">Danger</btn>
		<btn type="link">Link</btn>
		<i class="fa fa-search"></i>
		<h4>Native links</h4>
		<btn href="#">Default</btn>
		<btn href="#" type="primary">Primary</btn>
		<h4>Vue Router links</h4>
		<btn to="/">Default</btn>
		<btn to="/" type="primary">Primary</btn>
		<!-- btn-links.vue -->

		<section>
			<btn-group>
				<btn input-type="checkbox" input-value="1" v-model="model">Checkbox 1</btn>
				<btn input-type="checkbox" input-value="2" v-model="model">Checkbox 2</btn>
				<btn input-type="checkbox" input-value="3" v-model="model">Checkbox 3</btn>
				<btn input-type="checkbox" input-value="4" v-model="model" disabled>Checkbox 4 (Disabled)</btn>
			</btn-group>
			<hr/>
			<alert>Selected: {{model}}</alert>
		</section>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				model: ['1']
			}
		}
	}
</script>

<style>

</style>