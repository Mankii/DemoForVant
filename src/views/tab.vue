<template>
	<page class="demo-grey demo-tab">
		<d-block title="基础用法">
			<van-tabs v-model="active">
				<van-tab title="标签 1">内容 1</van-tab>
				<van-tab title="标签 2">内容 2</van-tab>
				<van-tab title="标签 3">内容 3</van-tab>
				<van-tab title="标签 4">内容 4</van-tab>
			</van-tabs>
		</d-block>
		<d-block title="通过名称匹配">
			<van-tabs v-model="activeName">
				<van-tab title="标签 1" name="a">内容 1</van-tab>
				<van-tab title="标签 2" name="b">内容 2</van-tab>
				<van-tab title="标签 3" name="c">内容 3</van-tab>
			</van-tabs>
		</d-block>
		<d-block title="标签栏滚动">
			<van-tabs>
				<van-tab v-for="index in 8" :key="index" :title="'标签 ' + index">
					内容 {{ index }}
				</van-tab>
			</van-tabs>
		</d-block>
		<d-block title="禁用标签">
			<van-tabs @disabled="onClickDisabled">
				<van-tab title="标签 1">内容 1</van-tab>
				<van-tab title="标签 2" disabled>内容 2</van-tab>
				<van-tab title="标签 3">内容 3</van-tab>
			</van-tabs>
		</d-block>
		<d-block title="样式风格">
			<van-tabs type="card">
				<van-tab title="标签 1">内容 1</van-tab>
				<van-tab title="标签 2">内容 2</van-tab>
				<van-tab title="标签 3">内容 3</van-tab>
			</van-tabs>
		</d-block>
		<d-block title="点击事件">
			<van-tabs @click="onClick">
				<van-tab title="标签 1">内容 1</van-tab>
				<van-tab title="标签 2">内容 2</van-tab>
			</van-tabs>
		</d-block>
		<d-block title="粘性布局">
			<van-tabs v-model="active1" sticky :offset-top="56">
				<van-tab v-for="index in 4" :key="index" :title="'选项 ' + index">
					内容 {{ index }}
					<div style="height: 300px;"></div>
				</van-tab>
			</van-tabs>
		</d-block>
		<d-block title="自定义标签">
			<van-tabs v-model="active2">
				<van-tab v-for="index in 2" :key="index">
					<div slot="title">
						<van-icon name="more-o" />选项
					</div>
					内容 {{ index }}
				</van-tab>
			</van-tabs>
		</d-block>
		<d-block title="切换动画">
			<van-tabs v-model="active3" animated>
				<van-tab v-for="index in 4" :key="index" :title="'选项 ' + index">
					内容 {{ index }}
				</van-tab>
			</van-tabs>
		</d-block>
		<d-block title="滑动切换">
			<van-tabs v-model="active4" swipeable>
				<van-tab v-for="index in 4" :key="index" :title="'选项 ' + index">
					内容 {{ index }}
				</van-tab>
			</van-tabs>
		</d-block>
		<d-block title="滚动导航">
			<van-tabs v-model="active5" scrollspy sticky>
				<van-tab v-for="index in 8" :key="index" :title="'选项 ' + index">
					内容 {{ index }}
				</van-tab>
			</van-tabs>
		</d-block>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				active: 2,
				activeName: 'a',
				active1: 2,
				active2: 2,
				active3: 2,
				active4: 2,
				active5: 2,
			};
		},
		methods: {
			onClickDisabled(name, title) {
				this.$toast(name + '已被禁用:' + title);
			},
			onClick(name, title) {
				this.$toast(title);
			}
		}
	}
</script>

<style>
	.demo-tab .van-tab__pane {
		padding: 25px 20px;
		background-color: #fff;
	}
</style>
