<template>
	<page class="demo-grey">
		<d-block title="基础用法" class="pl-20">
			<van-switch v-model="checked1" />
		</d-block>
		<d-block title="禁用状态" class="pl-20">
			<van-switch v-model="checked2" disabled />
		</d-block>
		<d-block title="加载状态" class="pl-20">
			<van-switch v-model="checked3" loading />
		</d-block>
		<d-block title="自定义大小" class="pl-20">
			<van-switch v-model="checked4" size="24px" />
		</d-block>
		<d-block title="自定义颜色" class="pl-20">
			<van-switch v-model="checked5" active-color="#07c160" inactive-color="#ee0a24" />
		</d-block>
		<d-block title="异步控制" class="pl-20">
			<van-switch :value="checked6" @input="onInput6" />
		</d-block>
		<d-block title="搭配单元格使用">
			<van-cell center title="标题">
				<van-switch v-model="checked7" slot="right-icon" size="24" />
			</van-cell>
		</d-block>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				checked1: true,
				checked2: true,
				checked3: true,
				checked4: true,
				checked5: true,
				checked6: true,
				checked7: true
			};
		},
		methods: {
			onInput6(checked) {
				this.$dialog.confirm({
					title: '提醒',
					message: '是否切换开关？'
				}).then(() => {
					this.checked6 = checked;
				});
			}
		}
	};
</script>

<style>
</style>
