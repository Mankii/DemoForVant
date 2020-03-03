<template>
	<page>
		<d-block title="基本用法">
			<van-slider v-model="value" @change="onChange" />
		</d-block>
		<d-block title="指定选择范围">
			<van-slider v-model="value_1" :min="-50" :max="50" />
		</d-block>
		<d-block title="禁用">
			<van-slider v-model="value_2" disabled />
		</d-block>
		<d-block title="指定步长">
			<van-slider v-model="value_3" :step="10" />
		</d-block>
		<d-block title="自定义样式">
			<van-slider v-model="value_4" bar-height="4px" active-color="#ee0a24" />
		</d-block>
		<d-block title="自定义按钮">
			<van-slider v-model="value_5" active-color="#ee0a24">
				<div slot="button" class="custom-button">
					{{ value_5 }}
				</div>
			</van-slider>
		</d-block>
		<d-block title="垂直方向">
			<div :style="{ height: '100px' }">
				<van-slider v-model="value_6" vertical />
			</div>
		</d-block>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				value: 50,
				value_1: 50,
				value_2: 50,
				value_3: 50,
				value_4: 50,
				value_5: 50,
				value_6: 50
			};
		},
		methods: {
			onChange(value) {
				this.$toast('当前值：' + value);
			}
		}
	};
</script>

<style>
	.custom-button {
		width: 26px;
		color: #fff;
		font-size: 10px;
		line-height: 18px;
		text-align: center;
		background-color: #ee0a24;
		border-radius: 100px;
	}
</style>
