<template>
	<page class="demo-grey">
		<d-block title="废弃写法">
			<van-cell-group>
				<van-switch-cell v-model="checked" title="基础用法" />
			</van-cell-group>
			<van-cell-group>
				<van-switch-cell v-model="checked" disabled title="禁用状态" />
			</van-cell-group>
			<van-cell-group>
				<van-switch-cell v-model="checked" loading title="加载状态" />
			</van-cell-group>
		</d-block>
		<d-block title="推荐写法">
			<van-cell title="基础用法">
				<van-switch v-model="checked" slot="right-icon" size="24" />
			</van-cell>
			<van-cell title="禁用状态">
				<van-switch v-model="checked" disabled slot="right-icon" size="24" />
			</van-cell>
			<van-cell title="加载状态">
				<van-switch v-model="checked" loading slot="right-icon" size="24" />
			</van-cell>
			<van-cell title="切换文本">
				<van-switch v-model="checked" slot="right-icon" size="24" />
				<div class="mr-10">{{checked ? "开启" : "关闭"}}</div>
			</van-cell>
		</d-block>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				checked: true
			}
		}
	}
</script>

<style>
</style>
