<template>
	<page class="demo-grey">
		<d-block title="基础用法">
			<van-panel title="标题" desc="描述信息" status="状态">
				<div>内容</div>
			</van-panel>
		</d-block>
		<d-block title="高级用法">
			<van-panel title="标题" desc="描述信息" status="状态">
				<div>内容</div>
				<div slot="footer">
					<van-button size="small">按钮</van-button>
					<van-button size="small" type="danger">按钮</van-button>
				</div>
			</van-panel>
		</d-block>
	</page>
</template>

<script>

</script>

<style>
</style>
