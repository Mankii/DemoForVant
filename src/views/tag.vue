<template>
	<page class="demo-tag">
		<d-block title="基础用法">
			<van-tag>标签</van-tag>
			<van-tag type="primary">标签</van-tag>
			<van-tag type="success">标签</van-tag>
			<van-tag type="danger">标签</van-tag>
			<van-tag type="warning">标签</van-tag>
		</d-block>
		<d-block title="圆角样式">
			<van-tag round>标签</van-tag>
			<van-tag round type="primary">标签</van-tag>
			<van-tag round type="success">标签</van-tag>
			<van-tag round type="danger">标签</van-tag>
			<van-tag round type="warning">标签</van-tag>
		</d-block>
		<d-block title="标记样式">
			<van-tag mark>标签</van-tag>
			<van-tag mark type="primary">标签</van-tag>
			<van-tag mark type="success">标签</van-tag>
			<van-tag mark type="danger">标签</van-tag>
			<van-tag mark type="warning">标签</van-tag>
		</d-block>
		<d-block title="空心样式">
			<van-tag plain>标签</van-tag>
			<van-tag plain type="primary">标签</van-tag>
			<van-tag plain type="success">标签</van-tag>
			<van-tag plain type="danger">标签</van-tag>
			<van-tag plain type="warning">标签</van-tag>
		</d-block>
		<d-block title="自定义颜色">
			<van-tag color="#f2826a">标签</van-tag>
			<van-tag color="#f2826a" plain>标签</van-tag>
			<van-tag color="#7232dd">标签</van-tag>
			<van-tag color="#7232dd" plain>标签</van-tag>
			<van-tag color="#ffe1e1" text-color="#ad0000">标签</van-tag>
		</d-block>
		<d-block title="标签大小">
			<van-tag type="danger">标签</van-tag>
			<van-tag type="danger" size="medium">标签</van-tag>
			<van-tag type="danger" size="large">标签</van-tag>
		</d-block>
		<d-block title="可关闭标签">
			<van-tag v-if="show.primary" closeable size="medium" type="primary" @close="close('primary')">
				标签
			</van-tag>
			<van-tag v-if="show.success" closeable size="medium" type="success" @close="close('success')">
				标签
			</van-tag>
		</d-block>
		<d-block title="">

		</d-block>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				show: {
					primary: true,
					success: true
				}
			}
		},
		methods: {
			close(type) {
				this.show[type] = false;
			}
		}
	}
</script>

<style>
	.demo-tag .van-tag+.van-tag {
		margin-left: 8px;
	}
</style>
