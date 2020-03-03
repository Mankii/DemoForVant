<template>
	<page>
		<d-block title="加载类型">
			<van-loading />
			<van-loading type="spinner" />
		</d-block>
		<d-block title="自定义颜色">
			<van-loading color="#1989fa" />
			<van-loading type="spinner" color="#1989fa" />
		</d-block>
		<d-block title="自定义大小">
			<van-loading size="24" />
			<van-loading type="spinner" size="24px" />
		</d-block>
		<d-block title="加载文案">
			<van-loading size="24px">加载中...</van-loading>
		</d-block>
		<d-block title="垂直排列">
			<van-loading size="24px" vertical>加载中...</van-loading>
		</d-block>
	</page>
</template>

<script>

</script>

<style>
	.van-loading {
		display: inline-block;
		margin: 5px 0 5px 20px;
	}

	.van-loading--vertical {
		display: -webkit-inline-box;
		display: -webkit-inline-flex;
		display: inline-flex;
	}
</style>
