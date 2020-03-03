<template>
	<page class="demo-grey demo-submit-bar">
		<d-block title="基础用法">
			<van-submit-bar
				:price="3050"
				button-text="提交订单"
				@submit="onSubmit"
			/>
		</d-block>
		<d-block title="禁用状态">
			<van-submit-bar
				disabled
				:price="3050"
				button-text="提交订单"
				tip="你的收货地址不支持同城送, 我们已为你推荐快递"
				tip-icon="info-o"
				@submit="onSubmit"
			/>
		</d-block>
		<d-block title="加载状态">
			<van-submit-bar
				loading
				:price="3050"
				button-text="提交订单"
				@submit="onSubmit"
			/>
		</d-block>
		<d-block title="高级用法">
			<van-submit-bar
				:price="3050"
				button-text="提交订单"
				@submit="onSubmit"
			>
				<van-checkbox v-model="checked">全选</van-checkbox>
				<span slot="tip">
					你的收货地址不支持同城送, <span>修改地址</span>
				</span>
			</van-submit-bar>
		</d-block>
	</page>
</template>

<script>
	export default{
		data(){
			return {
				checked:false
			}
		},
		methods:{
			onSubmit(){
				this.$toast("点击了确定")
			}
		}
	}
</script>

<style>
	.demo-submit-bar .van-submit-bar {
		position: relative;
	}
</style>
