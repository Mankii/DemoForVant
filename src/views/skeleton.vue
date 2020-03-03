<template>
	<page>
		<d-block title="基础用法">
			<van-skeleton title :row="3" />
		</d-block>
		<d-block title="显示头像">
			<van-skeleton title avatar :row="3" />
		</d-block>
		<d-block title="显示子组件">
			<van-skeleton title avatar :row="3" :loading="loading">
				<div>实际内容</div>
			</van-skeleton>
		</d-block>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				loading: true
			}
		},
		mounted() {
			setTimeout(() => {
				this.loading = false;
			}, 3000)
		}
	};
</script>

<style>
</style>
