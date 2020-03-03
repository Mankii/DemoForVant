<template>
	<page>
		<d-block title="基础用法">
			<van-uploader :after-read="afterRead" />
		</d-block>
		<d-block title="文件预览">
			<van-uploader v-model="fileList" multiple />
		</d-block>
		<d-block title="禁用">
			<van-uploader disabled />
		</d-block>
		<d-block title="上传状态">
			<van-uploader v-model="fileList2" :after-read="afterRead2" />
		</d-block>
		<d-block title="限制上传数量">
			<van-uploader v-model="fileList3" multiple :max-count="2" />
		</d-block>
		<d-block title="自定义上传样式">
			<van-uploader>
				<van-button icon="photo" type="primary">上传文件</van-button>
			</van-uploader>
		</d-block>
		<d-block title="上传前校验">
			<van-uploader :before-read="beforeRead" />
		</d-block>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				fileList: [{
						url: 'https://img.yzcdn.cn/vant/leaf.jpg'
					},
					// Uploader 根据文件后缀来判断是否为图片文件
					// 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
					{
						url: 'https://cloud-image',
						isImage: true
					}
				],
				fileList2: [{
						url: 'https://img.yzcdn.cn/vant/leaf.jpg',
						status: 'uploading',
						message: '上传中...'
					},
					{
						url: 'https://img.yzcdn.cn/vant/tree.jpg',
						status: 'failed',
						message: '上传失败'
					}
				],
				fileList3: []
			}
		},
		methods: {
			afterRead(file) {
				// 此时可以自行将文件上传至服务器
				console.log(file);
			},
			afterRead2(file) {
				file.status = 'uploading';
				file.message = '上传中...';

				setTimeout(() => {
					file.status = 'failed';
					file.message = '上传失败';
				}, 1000);
			},
			// 返回布尔值
			beforeRead(file) {
				if (file.type !== 'image/jpeg') {
					this.$toast('请上传 jpg 格式图片');
					return false;
				}
				return true;
			},
			// 返回 Promise
			asyncBeforeRead(file) {
				return new Promise((resolve, reject) => {
					if (file.type !== 'image/jpeg') {
						this.$toast('请上传 jpg 格式图片');
						reject();
					} else {
						resolve();
					}
				});
			},
		}
	};
</script>

<style>
</style>
