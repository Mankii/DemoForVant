<template>
	<page class="demo-grey">
		<d-block title="基础用法">
			<van-cell title="基础用法">
				<van-stepper v-model="value1" />
			</van-cell>
			<van-cell title="步长设置">
				<van-stepper v-model="value2" step="2" />
			</van-cell>
			<van-cell title="限制输入范围">
				<van-stepper v-model="value3" min="5" max="8" />
			</van-cell>
			<van-cell title="限制输入整数">
				<van-stepper v-model="value4" integer />
			</van-cell>
			<van-cell title="禁用状态">
				<van-stepper v-model="value5" disabled />
			</van-cell>
			<van-cell title="禁用输入框">
				<van-stepper v-model="value6" disabled-input />
			</van-cell>
			<van-cell title="固定小数位数">
				<van-stepper v-model="value7" step="0.2" :decimal-length="1" />
			</van-cell>
			<van-cell title="自定义大小">
				<van-stepper v-model="value8" input-width="40px" button-size="32px" />
			</van-cell>
			<van-cell title="异步变更">
				<van-stepper v-model="value9" async-change @change="onChange" />
			</van-cell>
		</d-block>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				value1: 1,
				value2: 1,
				value3: 1,
				value4: 1,
				value5: 1,
				value6: 1,
				value7: 1,
				value8: 1,
				value9: 1,
			}
		},
		methods: {
			onChange(value) {
				this.$toast.loading({
					forbidClick: true
				});

				setTimeout(() => {
					this.$toast.clear();

					// 注意此时修改 value 后会再次触发 change 事件
					this.value9 = value;
				}, 500);
			}
		}
	}
</script>

<style>
</style>
