<template>
	<page class="demo-grey demo-tabbar">
		<d-block title="基础用法">
			<van-tabbar v-model="active">
				<van-tabbar-item icon="home-o">标签</van-tabbar-item>
				<van-tabbar-item icon="search">标签</van-tabbar-item>
				<van-tabbar-item icon="friends-o">标签</van-tabbar-item>
				<van-tabbar-item icon="setting-o">标签</van-tabbar-item>
			</van-tabbar>
		</d-block>
		<d-block title="">
			<van-tabbar v-model="active1">
				<van-tabbar-item name="home" icon="home-o">标签</van-tabbar-item>
				<van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
				<van-tabbar-item name="friends" icon="friends-o">标签</van-tabbar-item>
				<van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
			</van-tabbar>
		</d-block>
		<d-block title="提示信息">
			<van-tabbar v-model="active2">
				<van-tabbar-item icon="home-o">标签</van-tabbar-item>
				<van-tabbar-item icon="search" dot>标签</van-tabbar-item>
				<van-tabbar-item icon="friends-o" info="5">标签</van-tabbar-item>
				<van-tabbar-item icon="setting-o" info="20">标签</van-tabbar-item>
			</van-tabbar>
		</d-block>
		<d-block title="自定义图标">
			<van-tabbar v-model="active3">
				<van-tabbar-item info="3">
					<span>自定义</span>
					<img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.inactive">
				</van-tabbar-item>
				<van-tabbar-item icon="search">标签</van-tabbar-item>
				<van-tabbar-item icon="setting-o">标签</van-tabbar-item>
			</van-tabbar>
		</d-block>
		<d-block title="自定义颜色">
			<van-tabbar v-model="active4" active-color="#07c160" inactive-color="#000">
				<van-tabbar-item icon="home-o">标签</van-tabbar-item>
				<van-tabbar-item icon="search">标签</van-tabbar-item>
				<van-tabbar-item icon="freinds-o">标签</van-tabbar-item>
				<van-tabbar-item icon="setting-o">标签</van-tabbar-item>
			</van-tabbar>
		</d-block>
		<d-block title="监听切换事件">
			<van-tabbar v-model="active5" @change="onChange5">
				<van-tabbar-item icon="home-o">标签1</van-tabbar-item>
				<van-tabbar-item icon="search">标签2</van-tabbar-item>
				<van-tabbar-item icon="freinds-o">标签3</van-tabbar-item>
				<van-tabbar-item icon="setting-o">标签4</van-tabbar-item>
			</van-tabbar>
		</d-block>
		<d-block title="路由模式">
			<van-tabbar route>
				<van-tabbar-item replace to="/home" icon="home-o">
					标签
				</van-tabbar-item>
				<van-tabbar-item replace to="/button" icon="search">
					标签
				</van-tabbar-item>
			</van-tabbar>
		</d-block>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
				active1: 'home',
				active2: 0,
				active3: 0,
				active4: 0,
				active5: 0,
				icon: {
					active: 'https://img.yzcdn.cn/vant/user-active.png',
					inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
				}
			}
		},
		methods: {
			onChange5(index) {
				this.$notify({
					type: 'primary',
					message: index
				});
			}
		}
	}
</script>

<style>
	.demo-tabbar .van-tabbar {
		position: relative;
	}
</style>
