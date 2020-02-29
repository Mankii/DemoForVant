<template>
	<div class="van-doc-demo-block">
		<h2 class="van-doc-demo-block__title">{{title}}</h2>
		<slot></slot>
	</div>
</template>

<script>
	export default{
		props:{
			title: {
				type: String,
				default: "标题"
			}
		}
	}
</script>

<style>
</style>
