<template>
	<page class="demo-grey">
		<d-block title="基础用法">
			<van-grid>
				<van-grid-item icon="photo-o" text="文字" />
				<van-grid-item icon="photo-o" text="文字" />
				<van-grid-item icon="photo-o" text="文字" />
				<van-grid-item icon="photo-o" text="文字" />
			</van-grid>
		</d-block>
		<d-block title="自定义列数">
			<van-grid :column-num="3">
				<van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
			</van-grid>
		</d-block>
		<d-block title="自定义内容">
			<van-grid :border="false" :column-num="3">
				<van-grid-item>
					<van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
				</van-grid-item>
				<van-grid-item>
					<van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
				</van-grid-item>
				<van-grid-item>
					<van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
				</van-grid-item>
			</van-grid>
		</d-block>
		<d-block title="正方形格子">
			<van-grid square>
				<van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
			</van-grid>
		</d-block>
		<d-block title="格子间距">
			<van-grid :gutter="10">
				<van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
			</van-grid>
		</d-block>
		<d-block title="页面导航">
			<van-grid clickable :column-num="2">
				<van-grid-item icon="home-o" text="路由跳转" to="/" />
				<van-grid-item icon="search" text="URL 跳转" url="/vant/mobile.html" />
			</van-grid>
		</d-block>
		<d-block title="提示信息">
			<van-grid :column-num="2">
				<van-grid-item icon="home-o" text="文字" dot />
				<van-grid-item icon="search" text="文字" info="99+" />
			</van-grid>
		</d-block>
	</page>
</template>

<script>

</script>

<style>
</style>
