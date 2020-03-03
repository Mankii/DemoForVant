<template>
	<page>
		<d-block title="基础用法">
			<van-progress :percentage="50" />
		</d-block>
		<d-block title="线条粗细">
			<van-progress :percentage="50" stroke-width="8" />
		</d-block>
		<d-block title="置灰">
			<van-progress inactive :percentage="50" />
		</d-block>
		<d-block title="样式定制">
			<d-row>
				<van-progress pivot-text="橙色" color="#f2826a" :percentage="25" />
			</d-row>
			<d-row>
				<van-progress pivot-text="红色" color="#ee0a24" :percentage="50" />
			</d-row>
			<d-row>
				<van-progress :percentage="75" pivot-text="紫色" pivot-color="#7232dd" color="linear-gradient(to right, #be99ff, #7232dd)" />
			</d-row>
		</d-block>
	</page>
</template>

<script>

</script>

<style>
</style>
