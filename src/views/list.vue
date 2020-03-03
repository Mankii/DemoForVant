<template>
	<page>
		<van-tabs v-model="active" class="demo-pull-refresh">

			<van-tab title="基础用法">
				<van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoad1">
					<van-cell v-for="item in list1" :key="item" :title="item" />
				</van-list>
			</van-tab>

			<van-tab title="错误提示">
				<van-list v-model="loading2" :error.sync="error2" error-text="请求失败，点击重新加载" @load="onLoad2">
					<van-cell v-for="item in list2" :key="item" :title="item" />
				</van-list>
			</van-tab>

			<van-tab title="下拉刷新">
				<van-pull-refresh v-model="refreshing3" @refresh="onRefresh3">
					<van-list v-model="loading3" :finished="finished3" finished-text="没有更多了" @load="onLoad3">
						<van-cell v-for="item in list3" :key="item" :title="item" />
					</van-list>
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
				list1: [],
				loading1: false,
				finished1: false,
				list2: [],
				error2: false,
				loading2: false,
				list3: [],
				loading3: false,
				finished3: false,
				refreshing3: false
			};
		},
		methods: {
			onLoad1() {
				// 异步更新数据
				// setTimeout 仅做示例，真实场景中一般为 ajax 请求
				setTimeout(() => {
					for (let i = 0; i < 10; i++) {
						this.list1.push(this.list1.length + 1);
					}

					// 加载状态结束
					this.loading1 = false;

					// 数据全部加载完成
					if (this.list1.length >= 40) {
						this.finished1 = true;
					}
				}, 1000);
			},
			onLoad2() {
				setTimeout(() => {
					this.loading2 = false;
					this.error2 = true;
				}, 1000);
			},
			onLoad3() {
				setTimeout(() => {
					if (this.refreshing3) {
						this.list3 = [];
						this.refreshing3 = false;
					}

					for (let i = 0; i < 10; i++) {
						this.list3.push(this.list3.length + 1);
					}
					this.loading3 = false;

					if (this.list3.length >= 40) {
						this.finished3 = true;
					}
				}, 1000);
			},
			onRefresh3() {
				// 清空列表数据
				this.finished3 = false;

				// 重新加载数据
				// 将 loading 设置为 true，表示处于加载状态
				this.loading3 = true;
				this.onLoad3();
			}
		}
	}
</script>

<style>
</style>
