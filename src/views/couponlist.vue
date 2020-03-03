<template>
	<page class="demo-grey">
		<d-block title="基础用法">
			<!-- 优惠券单元格 -->
			<van-coupon-cell
				:coupons="coupons"
				:chosen-coupon="chosenCoupon"
				@click="showList = true"
			/>
			<!-- 优惠券列表 -->
			<van-popup
				v-model="showList"
				round
				position="bottom"
				style="height: 90%; padding-top: 4px;"
			>
				<van-coupon-list
					:coupons="coupons"
					:chosen-coupon="chosenCoupon"
					:disabled-coupons="disabledCoupons"
					@change="onChange"
					@exchange="onExchange"
				/>
			</van-popup>
		</d-block>
	</page>
</template>

<script>
	const coupons = [{
		available: 1,
		condition: '无使用门槛\n最多优惠12元',
		reason: '',
		value: 150,
		name: '优惠券名称',
		startAt: 1489104000,
		endAt: 1514592000,
		valueDesc: '1.5',
		unitDesc: '元'
	},
	{
		available: 1,
		condition: '无使用门槛\n最多优惠12元',
		reason: '',
		value: 200,
		name: '优惠券名称222',
		startAt: 1489108000,
		endAt: 1514599000,
		valueDesc: '5.5',
		unitDesc: '元'
	}];
	export default {
		data() {
			return {
				showList: false,
				chosenCoupon: -1,
				coupons: coupons,
				disabledCoupons: [coupons[0]]
			}
		},
		methods: {
			onChange(index) {
				this.showList = false;
				this.chosenCoupon = index;
			},
			onExchange() {
				this.coupons.push(coupons[0]);
			}
		}
	}
</script>

<style>
</style>
