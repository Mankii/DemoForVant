<template>
	<page class="demo-grey">
		<d-block title="基础用法">
			<div v-for="(img,index) in imageList" :key="index+'_1'" class="p-10">
				<img v-lazy="img" class="img">
			</div>
		</d-block>
		<d-block title="背景图懒加载">
			<div v-for="(img,index) in imageList" :key="index+'_2'" class="p-10">
				<div v-lazy:background-image="img" class="img" style="width:100%;height:300px;background-size: 100% 100%;"></div>
			</div>
		</d-block>
		<d-block title="懒加载模块">
			<lazy-component>
				<div v-for="(img,index) in imageList" :key="index+'_3'" class="p-10">
					<img v-lazy="img" class="img">
				</div>
			</lazy-component>
		</d-block>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				imageList: [
					'https://img.yzcdn.cn/vant/apple-1.jpg',
					'https://img.yzcdn.cn/vant/apple-2.jpg'
				]
			};
		}
	}
</script>

<style>
	.img{
		width: 100%;
		height: auto;
		border: 16px solid #fff;
		border-radius: 20px;
	}
</style>
