<template>
	<page>
		<d-block title="文字提示">
			<van-button type="default" @click="toastTest(0)">文字提示</van-button>

		</d-block>
		<d-block title="加载提示">
			<van-button type="default" @click="toastTest(1)">默认加载提示</van-button>
			<van-button type="primary" @click="toastTest(2)">自定义加载图标</van-button>
		</d-block>
		<d-block title="成功/失败提示">
			<van-button type="primary" @click="toastTest(3)">成功按钮</van-button>
			<van-button type="danger" @click="toastTest(4)">失败按钮</van-button>
		</d-block>
		<d-block title="自定义图标">
			<van-button type="default" @click="toastTest(5)">自定义图标</van-button>
			<van-button type="primary" @click="toastTest(6)">展示图片</van-button>
		</d-block>
		<d-block title="动态更新提示">
			<van-button type="default" @click="toastTimer(3)">倒计时 3 秒</van-button>
		</d-block>
		<d-block title="组件内调用">
			this.$toast("组件内调用");
		</d-block>
		<d-block title="单例模式">
			<van-button type="primary" @click="allowMultipleTest()">多例模式</van-button>
		</d-block>
		<d-block title="修改默认配置">
			// 将所有 Toast 的展示时长设置为 2000 毫秒
			Toast.setDefaultOptions({ duration: 2000 });
<d-row></d-row>
			// 将所有 loading Toast 设置为背景不可点击 (2.2.10 版本开始支持)
			Toast.setDefaultOptions('loading', { forbidClick: true });
<d-row></d-row>
			// 重置所有 Toast 的默认配置
			Toast.resetDefaultOptions();
<d-row></d-row>
			// 重置 loading Toast 的默认配置 (2.2.10 版本开始支持)
			Toast.resetDefaultOptions('loading');
		</d-block>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				visible: false
			}
		},
		methods: {
			toastTest(type) {
				switch (type) {
					case 0:
						this.$toast('提示内容');
						break;
					case 1:
						this.$toast.loading({
							message: '加载中...',
							forbidClick: true
						});
						break;
					case 2:

						// 自定义加载图标
						this.$toast.loading({
							message: '加载中...',
							forbidClick: true,
							loadingType: 'spinner'
						});
						break;
					case 3:
						this.$toast.success('成功文案');

						break;
					case 4:
						this.$toast.fail('失败文案');
						break;
					case 5:
						this.$toast({
							message: '自定义图标',
							icon: 'like-o'
						});

						break;
					case 6:
						this.$toast({
							message: '展示图片',
							icon: 'https://img.yzcdn.cn/vant/logo.png'
						});
						break;
					case 7:
						break;
					case 8:
						break;
				}
			},
			toastTimer(second) {
				second = second||3;
				const toast = this.$toast.loading({
					duration: 0, // 持续展示 toast
					forbidClick: true,
					message: '倒计时 '+second+' 秒'
				});

				const timer = setInterval(() => {
					second--;
					if (second) {
						toast.message = `倒计时 ${second} 秒`;
					} else {
						clearInterval(timer);
						// 手动清除 this.$toast
						this.$toast.clear();
					}
				}, 1000);
			},
			allowMultipleTest(){
				this.$toast.allowMultiple();

				const toast1 = this.$toast('第一个 toast');
				const toast2 = this.$toast.success('第二个 toast');
				
				setTimeout(()=>{
					toast1.clear();
				},1000)
				setTimeout(()=>{
					toast2.clear();
				},2000)
			}
		}
	}
</script>

<style>
</style>
