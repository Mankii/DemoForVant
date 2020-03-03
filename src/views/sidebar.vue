<template>
	<page>
		<d-block title="基础用法">
			<van-sidebar v-model="activeKey">
				<van-sidebar-item title="标签名称" />
				<van-sidebar-item title="标签名称" />
				<van-sidebar-item title="标签名称" />
			</van-sidebar>
		</d-block>
		<d-block title="提示信息">
			<van-sidebar v-model="activeKey">
				<van-sidebar-item title="标签名称" dot />
				<van-sidebar-item title="标签名称" info="5" />
				<van-sidebar-item title="标签名称" info="99+" />
			</van-sidebar>
		</d-block>
		<d-block title="禁用选项">
			<van-sidebar v-model="activeKey">
				<van-sidebar-item title="标签名称" />
				<van-sidebar-item title="标签名称" disabled />
				<van-sidebar-item title="标签名称" />
			</van-sidebar>
		</d-block>
		<d-block title="监听切换事件">
			<van-sidebar v-model="activeKey" @change="onChange">
				<van-sidebar-item title="标签名1" />
				<van-sidebar-item title="标签名2" />
				<van-sidebar-item title="标签名3" />
			</van-sidebar>
		</d-block>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				activeKey: 0
			};
		},
		methods: {
			onChange(index) {
				this.$notify({
					type: 'primary',
					message: index
				});
			}
		}
	};
</script>

<style>
</style>
