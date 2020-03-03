<template>
	<page>
		<d-block title="基础用法">
			<van-rate v-model="value" />
		</d-block>
		<d-block title="自定义图标">
			<van-rate v-model="value_0" icon="like" void-icon="like-o" />
		</d-block>
		<d-block title="自定义样式">
			<van-rate v-model="value_1" :size="25" color="#ee0a24" void-icon="star" void-color="#eee" />
		</d-block>
		<d-block title="半星">
			<van-rate v-model="value_2" allow-half void-icon="star" void-color="#eee" />
		</d-block>
		<d-block title="自定义数量">
			<van-rate v-model="value_3" :count="6" />
		</d-block>
		<d-block title="禁用状态">
			<van-rate v-model="value_4" disabled />
		</d-block>
		<d-block title="只读状态">
			<van-rate v-model="value_5" readonly />
		</d-block>
		<d-block title="监听 change 事件">
			<van-rate v-model="value_6" @change="onChange_6" />
		</d-block>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				value: 3,
				value_0: 3,
				value_1: 3,
				value_2: 2.5,
				value_3: 3,
				value_4: 3,
				value_5: 3,
				value_6: 3
			};
		},
		method: {
			onChange_6(value) {
				this.$toast('当前值：' + value);
			}
		}
	}
</script>

<style>
</style>
