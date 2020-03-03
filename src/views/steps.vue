<template>
	<page>
		<d-block title="基础用法">
			<d-row>
				<van-button type="default" @click="nextStep()">默认按钮</van-button>
			</d-row>
			<van-steps :active="active">
				<van-step>买家下单</van-step>
				<van-step>商家接单</van-step>
				<van-step>买家提货</van-step>
				<van-step>交易完成</van-step>
			</van-steps>
		</d-block>
		<d-block title="自定义样式">
			<van-steps :active="active" active-icon="success" active-color="#38f">
				<van-step>买家下单</van-step>
				<van-step>商家接单</van-step>
				<van-step>买家提货</van-step>
				<van-step>交易完成</van-step>
			</van-steps>
		</d-block>
		<d-block title="竖向步骤条">
			<van-steps direction="vertical" :active="active">
				<van-step>
					<h3>【城市】物流状态1</h3>
					<p>2016-07-12 12:40</p>
				</van-step>
				<van-step>
					<h3>【城市】物流状态2</h3>
					<p>2016-07-11 10:00</p>
				</van-step>
				<van-step>
					<h3>快件已发货</h3>
					<p>2016-07-10 09:30</p>
				</van-step>
				<van-step>
					<h3>买家已付款</h3>
					<p>2016-07-09 09:30</p>
				</van-step>
			</van-steps>
		</d-block>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				active: 1
			};
		},
		methods: {
			nextStep() {
				if (this.active == 3) {
					this.active = 0;
				} else {
					this.active += 1;
				}
			}
		}
	}
</script>

<style>
</style>
