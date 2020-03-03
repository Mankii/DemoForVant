<template>
	<page class="demo-grey">
		<d-block title="基础用法">
			<van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
		</d-block>
		<d-block title="高级用法">
			<van-nav-bar title="标题" left-text="返回" left-arrow>
				<van-icon name="search" slot="right" />
			</van-nav-bar>
		</d-block>
	</page>
</template>

<script>
	export default {
		methods: {
			onClickLeft() {
				this.$toast('返回');
			},
			onClickRight() {
				this.$toast('按钮');
			}
		}
	}
</script>

<style>
</style>
