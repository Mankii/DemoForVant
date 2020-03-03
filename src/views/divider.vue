<template>
	<page>
		<d-block title="基础用法">
			<van-divider />
		</d-block>
		<d-block title="展示文字">
			<van-divider>文字</van-divider>
		</d-block>
		<d-block title="内容位置">
			<van-divider content-position="left">文字</van-divider>
			<van-divider content-position="right">文字</van-divider>
		</d-block>
		<d-block title="虚线">
			<van-divider dashed>文字</van-divider>
		</d-block>
		<d-block title="自定义样式">
			<van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
				文字
			</van-divider>
		</d-block>
	</page>
</template>

<script>

</script>

<style>
</style>
