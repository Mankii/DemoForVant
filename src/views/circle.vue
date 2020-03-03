<template>
	<page>
		<d-block title="基础用法">
			<van-circle v-model="currentRate1" :rate="30" :speed="100" :text="text" />
		</d-block>
		<d-block title="宽度定制">
			<d-row>
				<van-circle v-model="currentRate2" :rate="rate2" :stroke-width="60" text="宽度定制" />
				<van-circle v-model="currentRate3" :rate="rate3" layer-color="#ebedf0" text="颜色定制" />
				<van-circle v-model="currentRate4" :rate="rate4" :color="gradientColor4" text="渐变色" />
			</d-row>
			<van-circle v-model="currentRate5" :rate="rate5" :clockwise="false" text="逆时针方向" />
		</d-block>
		<d-block title="操作">
			<d-row>
				<van-circle v-model="currentRate6" :rate="rate6" size="120px" text="大小定制" />
			</d-row>
			<van-button type="primary" @click="tolower()">减少</van-button>
			<van-button type="danger" @click="toupper()">增加</van-button>
		</d-block>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				currentRate1: 0,
				rate1: 30,
				currentRate2: 0,
				rate2: 30,
				currentRate3: 0,
				rate3: 30,
				currentRate4: 0,
				rate4: 30,
				gradientColor4: {
					'0%': '#3fecff',
					'100%': '#6149f6'
				},
				currentRate5: 0,
				rate5: 30,
				currentRate6: 0,
				rate6: 30,
			};
		},
		computed: {
			text() {
				return this.currentRate1.toFixed(0) + '%'
			}
		},
		methods: {
			tolower() {
				this.currentRate6--;
			},
			toupper() {
				this.currentRate6++;
			},
		}
	};
</script>

<style>
	.van-circle~.van-circle {
		margin-left: 20px;
	}
</style>
