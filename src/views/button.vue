<template>
	<page>
		<d-block title="按钮类型">
			<d-row>
				<van-button type="default">默认按钮</van-button>
				<van-button type="primary">主要按钮</van-button>
				<van-button type="info">信息按钮</van-button>
			</d-row>
			<van-button type="warning">警告按钮</van-button>
			<van-button type="danger">危险按钮</van-button>
		</d-block>
		<d-block title="朴素按钮">
			<van-button plain type="primary">朴素按钮</van-button>
			<van-button plain type="info">朴素按钮</van-button>
		</d-block>
		<d-block title="细边框">
			<van-button plain hairline type="primary">细边框按钮</van-button>
			<van-button plain hairline type="info">细边框按钮</van-button>
		</d-block>
		<d-block title="禁用状态">
			<van-button disabled type="primary">禁用状态</van-button>
			<van-button disabled type="info">禁用状态</van-button>
		</d-block>
		<d-block title="加载状态">
			<van-button loading type="primary" />
			<van-button loading type="primary" loading-type="spinner" />
			<van-button loading type="info" loading-text="加载中..." />
		</d-block>
		<d-block title="按钮形状">
			<van-button square type="primary">方形按钮</van-button>
			<van-button round type="info">圆形按钮</van-button>
		</d-block>
		<d-block title="图标按钮">
			<van-button icon="star-o" type="primary" />
			<van-button icon="star-o" type="primary">按钮</van-button>
			<van-button icon="https://img.yzcdn.cn/vant/logo.png" type="info">按钮</van-button>
		</d-block>
		<d-block title="按钮尺寸">
			<d-row>
				<van-button type="primary" size="large">大号按钮</van-button>
			</d-row>
			<d-row>
				<van-button type="primary" size="normal">普通按钮</van-button>
			</d-row>
			<d-row>
				<van-button type="primary" size="small">小型按钮</van-button>
			</d-row>
				<van-button type="primary" size="mini">迷你按钮</van-button>
		</d-block>
		<d-block title="块级元素">
			<van-button type="primary" block>块级元素</van-button>
		</d-block>
		<d-block title="页面导航">
			<van-button type="primary" url="/vant/mobile.html">URL 跳转</van-button>
			<van-button type="primary" to="index">路由跳转</van-button>
		</d-block>
		<d-block title="自定义颜色">
			<van-button color="#7232dd">单色按钮</van-button>
			<van-button color="#7232dd" plain>单色按钮</van-button>
			<van-button color="linear-gradient(to right, #4bb0ff, #6149f6)">渐变色按钮</van-button>
		</d-block>
		<d-block title="">
			
		</d-block>
	</page>
</template>

<script>
	
</script>

<style>
	.demo-button .van-button--small,
	.demo-button .van-button--normal:not(:last-child) {
		margin-right: 16px;
	}
</style>
