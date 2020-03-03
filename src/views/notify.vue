<template>
	<page>
		<d-block title="基础用法">
			<van-button type="default" @click="notityTest()">基础内容</van-button>

		</d-block>
		<d-block title="通知类型">
			<d-row>
				<van-button type="info" @click="notifyType('primary')">主要通知</van-button>
				<van-button type="primary" @click="notifyType('success')">成功通知</van-button>
			</d-row>
			<van-button type="danger" @click="notifyType('danger')">危险通知</van-button>
			<van-button type="warning" @click="notifyType('warning')">警告通知</van-button>
		</d-block>
		<d-block title="自定义配置">
			<van-button type="primary" @click="notifyColor()">自定义颜色</van-button>
			<van-button type="primary" @click="notifyTime()">自定义时长</van-button>
		</d-block>
	</page>
</template>

<script>
	export default {
		methods: {
			notityTest() {
				this.$notify("通知内容测试")
			},
			notifyType(type) {
				this.$notify({
					type: type,
					message: type + '通知内容'
				})
			},
			notifyColor() {
				this.$notify({
					message: '自定义颜色',
					color: '#ad0000',
					background: '#ffe1e1'
				});
			},
			notifyTime() {
				this.$notify({
					message: '自定义时长',
					duration: 1000
				});
			},
		}
	}
</script>

<style>
</style>
