<template>
	<page>
		<d-block title="基础用法">
			<van-button type="primary" @click="imgPreview1()">预览图片</van-button>
		</d-block>
		<d-block title="指定初始位置">
			<van-button type="primary" @click="imgPreview2()">指定初始位置</van-button>
		</d-block>
		<d-block title="展示关闭按钮">
			<van-button type="primary" @click="imgPreview3()">展示关闭按钮</van-button>
		</d-block>
		<d-block title="异步关闭">
			<van-button type="primary" @click="imgPreview4()">异步关闭</van-button>
		</d-block>
		<d-block title="组件调用">
			<van-button type="primary" @click="imgPreview5()">组件调用</van-button>
			<van-image-preview v-model="show" :images="images" @change="onChange">
				<template v-slot:index>第{{ index }}页</template>
			</van-image-preview>
		</d-block>
	</page>
</template>

<script>
	import Vue from 'vue';
	import {
		ImagePreview
	} from 'vant';
	Vue.use(ImagePreview);

	export default {
		data() {
			return {
				show: false,
				index: 0,
				images: [
					'https://img.yzcdn.cn/1.jpg',
					'https://img.yzcdn.cn/2.jpg'
				]
			};
		},
		methods: {
			imgPreview1() {
				ImagePreview([
					'https://img.yzcdn.cn/1.jpg',
					'https://img.yzcdn.cn/2.jpg'
				]);
			},
			imgPreview2() {
				ImagePreview({
					images: [
						'https://img.yzcdn.cn/1.jpg',
						'https://img.yzcdn.cn/2.jpg'
					],
					startPosition: 1,
					onClose() {
						// do something
					}
				});
			},
			imgPreview3() {
				ImagePreview({
					images: [
						'https://img.yzcdn.cn/1.jpg',
						'https://img.yzcdn.cn/2.jpg'
					],
					closeable: true
				});
			},
			imgPreview4() {
				const instance = ImagePreview({
					images: [
						'https://img.yzcdn.cn/1.jpg',
						'https://img.yzcdn.cn/2.jpg'
					],
					asyncClose: true
				});

				setTimeout(() => {
					instance.close();
				}, 1000);
			},
			imgPreview5() {
				this.show = true;
			},
			onChange(index) {
				this.index = index;
			}

		}
	}
</script>

<style>
</style>
