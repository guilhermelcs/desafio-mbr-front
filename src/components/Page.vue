<template>
	<div class="container">
		<div class="row">
			<div :class="`${col}`">
				<div class="row">
					<div class="col-12">
						<h1>{{ title }}</h1>
						<hr>
					</div>

					<slot></slot>

				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { defineProps } from 'vue'
	
	const props = defineProps({
  	title: String,
		col: {
			type: String,
			default: 'col-12 col-md-6'
		}
	})
		
</script>

<style>
	#app {
		font-family: 'Poppins', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #ffffff;
		padding-top: 30px;
		padding-bottom: 30px;
		background: url('../assets/wdc-bg-roubadissimo.svg');
		min-height: 100vh;
	}

	@media (min-width:1024px) {
		section {
			background-image: url('../assets/roubei-mesmo.svg');
			min-height: 90vh;
			background-repeat: no-repeat no-repeat;
			background-position: right;
			background-size: contain;
		} 
	}
</style>