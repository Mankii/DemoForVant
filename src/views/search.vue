<template>
	<page class="demo-grey">
		<d-block title="基础用法">
			<van-search v-model="value" placeholder="请输入搜索关键词" />
		</d-block>
		<d-block title="事件监听">
			<form action="/">
				<van-search
					v-model="value_0"
					show-action
					placeholder="请输入搜索关键词"
					@search="onSearch_0"
					@cancel="onCancel_0"
				/>
			</form>
		</d-block>
		<d-block title="搜索框内容对齐">
			<van-search
				v-model="value_1"
				placeholder="请输入搜索关键词"
				input-align="center"
			/>
		</d-block>
		<d-block title="禁用搜索框">
			<van-search
				v-model="value_2"
				disabled
				placeholder="请输入搜索关键词"
			/>
		</d-block>
		<d-block title="自定义背景色">
			<van-search
				v-model="value_3"
				shape="round"
				background="#4fc08d"
				placeholder="请输入搜索关键词"
			/>
		</d-block>
		<d-block title="自定义按钮">
			<van-search
				v-model="value_4"
				show-action
				placeholder="请输入搜索关键词"
				@search="onSearch_4"
			>
				<div slot="action" @click="onSearch_4">搜索</div>
			</van-search>
		</d-block>
	</page>
</template>

<script>
export default {
	data() {
		return {
			value: '',
			value_0: '',
			value_1: '',
			value_2: '',
			value_3: '',
			value_4: ''
		};
	},
	methods:{
		onSearch_0(val) {
			this.$toast(val);
		},
		onCancel_0() {
			this.$toast('取消');
		},
		onSearch_4(val) {
			this.$toast(val);
		},
	}
}
</script>

<style>
</style>
