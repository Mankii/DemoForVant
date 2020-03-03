<template>
	<page class="demo-goods-action demo-grey">
		<d-block title="基础用法">
			<van-goods-action>
				<van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
				<van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
				<van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
				<van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
			</van-goods-action>
		</d-block>
		<d-block title="徽标提示">
			<van-goods-action>
				<van-goods-action-icon icon="chat-o" text="客服" />
				<van-goods-action-icon icon="cart-o" text="购物车" info="5" />
				<van-goods-action-icon icon="shop-o" text="店铺" info="12" />
				<van-goods-action-button type="warning" text="加入购物车" />
				<van-goods-action-button type="danger" text="立即购买" />
			</van-goods-action>
		</d-block>
		<d-block title="自定义图标颜色">
			<van-goods-action>
				<van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
				<van-goods-action-icon icon="cart-o" text="购物车" />
				<van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
				<van-goods-action-button type="warning" text="加入购物车" />
				<van-goods-action-button type="danger" text="立即购买" />
			</van-goods-action>
		</d-block>
		<d-block title="自定义按钮颜色">
			<van-goods-action>
				<van-goods-action-icon icon="chat-o" text="客服" />
				<van-goods-action-icon icon="shop-o" text="店铺" />
				<van-goods-action-button color="#be99ff" type="warning" text="加入购物车" />
				<van-goods-action-button color="#7232dd" type="danger" text="立即购买" />
			</van-goods-action>
		</d-block>
	</page>
</template>

<script>
	export default {
		methods: {
			onClickIcon() {
				this.$toast('点击图标');
			},
			onClickButton() {
				this.$toast('点击按钮');
			}
		}
	}
</script>

<style>
	.demo-goods-action .van-goods-action {
		position: relative;
	}
</style>
