<template>
	<page>
		<van-tabs v-model="active" class="demo-pull-refresh">
			
			<van-tab title="基础用法">
				<van-pull-refresh v-model="isLoading1" @refresh="onRefresh1">
					<p>刷新次数: {{ count1 }}</p>
				</van-pull-refresh>
			</van-tab>
			
			<van-tab title="成功提示">
				<van-pull-refresh
					v-model="isLoading2"
					success-text="刷新成功"
					@refresh="onRefresh2"
				>
					<p>刷新次数: {{ count2 }}</p>
				</van-pull-refresh>
			</van-tab>
			
			<van-tab title="自定义提示">
				<van-pull-refresh v-model="isLoading3" :head-height="80" @refresh="onRefresh3">
					<!-- 下拉提示，通过 scale 实现一个缩放效果 -->
					<img
						class="doge"
						slot="pulling"
						slot-scope="props"
						src="https://img.yzcdn.cn/vant/doge.png"
						:style="{ transform: `scale(${props.distance / 80})` }"
					>
					<!-- 释放提示 -->
					<img
						class="doge"
						slot="loosing"
						src="https://img.yzcdn.cn/vant/doge.png"
					>
					<!-- 加载提示 -->
					<img
						class="doge"
						slot="loading"
						src="https://img.yzcdn.cn/vant/doge-fire.jpg"
					>
					<p>刷新次数: {{ count3 }}</p>
				</van-pull-refresh>
			</van-tab>
			
		</van-tabs>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
				count1: 0,
				isLoading1: false,
				count2: 0,
				isLoading2: false,
				count3: 0,
				isLoading3: false
			};
		},
		methods: {
			onRefresh1() {
				setTimeout(() => {
					this.$toast('刷新成功');
					this.isLoading1 = false;
					this.count1++;
				}, 1000);
			},
			onRefresh2() {
				setTimeout(() => {
					this.isLoading2 = false;
					this.count2++;
				}, 1000);
			},
			onRefresh3() {
				setTimeout(() => {
					this.isLoading3 = false;
					this.count3++;
				}, 1000);
			}
		}
	}
</script>

<style>
	.demo-pull-refresh .van-pull-refresh__track {
		height: calc(100vh - 44px - 56px);
	}
	.doge {
		width: 140px;
		height: 72px;
		margin-top: 8px;
		border-radius: 4px;
	}
</style>
