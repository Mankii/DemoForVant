<template>
	<page class="demo-swipe demo-grey">
		<d-block title="基础用法">
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
				<van-swipe-item>1</van-swipe-item>
				<van-swipe-item>2</van-swipe-item>
				<van-swipe-item>3</van-swipe-item>
				<van-swipe-item>4</van-swipe-item>
			</van-swipe>
		</d-block>
		<d-block title="图片懒加载">
			<van-swipe :autoplay="3000">
				<van-swipe-item v-for="(image, index) in images" :key="index">
					<img v-lazy="image" />
				</van-swipe-item>
			</van-swipe>
		</d-block>
		<d-block title="监听 change 事件">
			<van-swipe @change="onChange">
				<van-swipe-item>1</van-swipe-item>
				<van-swipe-item>2</van-swipe-item>
				<van-swipe-item>3</van-swipe-item>
				<van-swipe-item>4</van-swipe-item>
			</van-swipe>
		</d-block>
		<d-block title="纵向滚动">
			<van-swipe style="height: 200px;" vertical>
				<van-swipe-item>1</van-swipe-item>
				<van-swipe-item>2</van-swipe-item>
				<van-swipe-item>3</van-swipe-item>
				<van-swipe-item>4</van-swipe-item>
			</van-swipe>
		</d-block>
		<d-block title="自定义滑块大小">
			<van-swipe :loop="false" :width="150">
				<van-swipe-item>1</van-swipe-item>
				<van-swipe-item>2</van-swipe-item>
				<van-swipe-item>3</van-swipe-item>
				<van-swipe-item>4</van-swipe-item>
			</van-swipe>
		</d-block>
		<d-block title="自定义指示器">
			<van-swipe @change="onChange_2">
				<van-swipe-item>1</van-swipe-item>
				<van-swipe-item>2</van-swipe-item>
				<van-swipe-item>3</van-swipe-item>
				<van-swipe-item>4</van-swipe-item>

				<div class="custom-indicator" slot="indicator">
					{{ current_2 + 1 }}/4
				</div>
			</van-swipe>
		</d-block>
		<d-block title="">

		</d-block>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				images: [
					'https://img.yzcdn.cn/vant/apple-2.jpg',
					'https://img.yzcdn.cn/vant/apple-3.jpg',
					'https://img.yzcdn.cn/vant/apple-4.jpg'
				],
				current_2: 0
			}
		},
		methods: {
			onChange(index) {
				this.$toast('当前 Swipe 索引：' + index);
			},
			onChange_2(index) {
				this.current = index;
			}
		}
	}
</script>

<style>
	.my-swipe .van-swipe-item {
		color: #fff;
		font-size: 20px;
		line-height: 150px;
		text-align: center;
		background-color: #39a9ed;
	}

	.demo-swipe .van-swipe-item {
		color: #fff;
		font-size: 20px;
		line-height: 150px;
		text-align: center;
	}

	.demo-swipe .van-swipe-item:nth-child(odd) {
		background-color: #66c6f2;
	}

	.demo-swipe .van-swipe-item:nth-child(even) {
		background-color: #39a9ed;
	}

	.demo-swipe .van-swipe img {
		display: block;
		box-sizing: border-box;
		width: 100%;
		height: 240px;
		padding: 30px 60px;
		background-color: #fff;
		pointer-events: none;
	}

	.demo-swipe .custom-indicator {
		position: absolute;
		right: 5px;
		bottom: 5px;
		padding: 2px 5px;
		color: #fff;
		font-size: 12px;
		background: rgba(0, 0, 0, 0.1);
	}
</style>
