<template>
	<page class="demo-grey">
		<d-block title="基础用法">
			<van-swipe-cell>
				<template slot="left">
					<van-button square type="primary" text="选择" />
				</template>
				<van-cell :border="false" title="单元格" value="内容" />
				<template slot="right">
					<van-button square type="danger" text="删除" />
					<van-button square type="primary" text="收藏" />
				</template>
			</van-swipe-cell>
		</d-block>
		<d-block title="自定义内容">
			<van-swipe-cell>
				<van-card num="2" price="2.00" desc="描述信息" title="商品标题" class="goods-card" thumb="https://img.yzcdn.cn/vant/cat.jpeg" />
				<van-button slot="right" square text="删除" type="danger" class="delete-button" />
			</van-swipe-cell>

		</d-block>
		<d-block title="异步关闭">
			<van-swipe-cell :before-close="beforeClose">
				<template slot="left">
					<van-button square type="primary" text="选择" />
				</template>
				<van-cell :border="false" title="单元格" value="内容" />
				<template slot="right">
					<van-button square type="danger" text="删除" />
				</template>
			</van-swipe-cell>
		</d-block>
	</page>
</template>

<script>
	export default {
		methods: {
			// position 为关闭时点击的位置
			// instance 为对应的 SwipeCell 实例
			beforeClose({
				position,
				instance
			}) {
				switch (position) {
					case 'left':
					case 'cell':
					case 'outside':
						instance.close();
						break;
					case 'right':
						this.$dialog.confirm({
							message: '确定删除吗？'
						}).then(() => {
							instance.close();
						});
						break;
				}
			}
		}
	}
</script>

<style>
	.goods-card {
		margin: 0;
		background-color: @white;
	}

	.delete-button {
		height: 100%;
	}
</style>
