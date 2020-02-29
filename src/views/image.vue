<template>
	<page>
		<d-block title="基础用法">
			<van-image
				width="100"
				height="100"
				src="https://img.yzcdn.cn/vant/cat.jpeg"
			/>
		</d-block>
		<d-block title="填充模式">
			<van-image
				width="10rem"
				height="10rem"
				fit="contain"
				src="https://img.yzcdn.cn/vant/cat.jpeg"
			/>
		</d-block>
		<d-block title="圆形图片">
			<van-image
				round
				width="10rem"
				height="10rem"
				src="https://img.yzcdn.cn/vant/cat.jpeg"
			/>
		</d-block>
		<d-block title="图片懒加载">
			<van-image
				width="100"
				height="100"
				lazy-load
				src="https://img.yzcdn.cn/vant/cat.jpeg"
			/>
		</d-block>
		<d-block title="加载中提示">
			<van-image src="https://img.yzcdn.cn/vant/cat.jpeg">
				<template v-slot:loading>
				<van-loading type="spinner" size="20" />
				</template>
			</van-image>
		</d-block>
		<d-block title="加载失败提示">
			<van-image src="https://img.yzcdn.cn/vant/cat.jpeg">
				<template v-slot:error>加载失败</template>
			</van-image>
		</d-block>
	</page>
</template>

<script>
	
</script>

<style>
</style>
