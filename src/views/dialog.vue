<template>
	<page>
		<d-block title="提示弹窗">
			<van-button type="<primary></primary>" @click="dialog1()">提示弹窗</van-button>
			<van-button type="primary" @click="dialog2()">提示弹窗(无标题)</van-button>
		</d-block>
		<d-block title="确认弹窗">
			<van-button type="primary" @click="dialog3()">确认弹窗</van-button>
		</d-block>
		<d-block title="异步关闭">
			<van-button type="primary" @click="dialog4()">异步关闭</van-button>
		</d-block>
	</page>
</template>

<script>
	export default {
		methods: {
			dialog1() {
				this.$dialog.alert({
					title: '标题',
					message: '弹窗内容'
				}).then(() => {
					// on close
				});
			},
			dialog2() {
				this.$dialog.alert({
					message: '弹窗内容'
				}).then(() => {
					// on close
				});
			},
			dialog3() {
				this.$dialog.confirm({
					title: '标题',
					message: '弹窗内容'
				}).then(() => {
					// on confirm
					this.$toast("点了确认")
				}).catch(() => {
					// on cancel
					this.$toast("点了取消")
				});
			},
			dialog4() {
				function beforeClose(action, done) {
					if (action === 'confirm') {
						setTimeout(done, 1000);
					} else {
						done();
					}
				}

				this.$dialog.confirm({
					title: '标题',
					message: '弹窗内容',
					beforeClose
				});
			},
		}
	}
</script>

<style>
</style>
