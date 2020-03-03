<template>
	<page>
		<d-block title="基础用法">
			<van-card
				num="2"
				price="2.00"
				desc="描述信息"
				title="商品标题"
				thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
			/>
		</d-block>
		<d-block title="营销信息">
			<van-card
				num="2"
				tag="标签"
				price="2.00"
				desc="描述信息"
				title="商品标题"
				thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
				origin-price="10.00"
			/>
		</d-block>
		<d-block title="自定义内容">
			<van-card
				num="2"
				price="2.00"
				desc="描述信息"
				title="商品标题"
				thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
			>
				<div slot="tags">
					<van-tag plain type="danger">标签</van-tag>
					<van-tag plain type="danger">标签</van-tag>
				</div>
				<div slot="footer">
					<van-button size="mini">按钮</van-button>
					<van-button size="mini">按钮</van-button>
				</div>
			</van-card>
		</d-block>
	</page>
</template>

<script>
	
</script>

<style>
</style>
