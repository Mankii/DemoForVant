<template>
	<page class="demo-grey">
		<d-block title="基础用法">
			<van-sticky>
				<van-button type="primary" style="margin-left: 15px;">基础用法</van-button>
			</van-sticky>
		</d-block>
		<d-block title="吸顶距离">
			<van-sticky :offset-top="50">
				<van-button type="info" style="margin-left: 115px;">吸顶距离</van-button>
			</van-sticky>
		</d-block>
		<d-block title="指定容器">
			<div ref="container" style="height: 150px; background-color: rgb(255, 255, 255);">
				<van-sticky :container="container">
					<van-button type="warning" style="margin-left: 215px;">指定容器</van-button>
				</van-sticky>
			</div>
		</d-block>
		<div style="height: 1000px;padding:20px">滚动屏幕试试~</div>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				container: null
			};
		},
		mounted() {
			this.container = this.$refs.container;
		}
	};
</script>

<style>
</style>
