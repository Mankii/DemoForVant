<template>
	<page class="demo-grey">
		<d-block title="基础用法">
			<van-notice-bar :text="text" left-icon="volume-o" />
		</d-block>
		<d-block title="禁用滚动">
			<van-notice-bar :scrollable="false">
				{{text}}
			</van-notice-bar>
		</d-block>
		<d-block title="多行展示">
			<van-notice-bar wrapable :scrollable="false">
				{{text}}
			</van-notice-bar>
		</d-block>
		<d-block title="通知栏模式">
			<!-- closeable 模式，在右侧显示关闭按钮 -->
			<van-notice-bar mode="closeable">
				{{text}}
			</van-notice-bar>
			
			<van-divider />

			<!-- link 模式，在右侧显示链接箭头 -->
			<van-notice-bar mode="link">
				{{text}}
			</van-notice-bar>
		</d-block>
		<d-block title="自定义样式">
			<van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
				{{text}}
			</van-notice-bar>
		</d-block>
	</page>
</template>

<script>
export default{
	data(){
		return {
			text: "关关雎鸠，在河之洲。窈窕淑女，君子好逑。参差荇菜，左右流之。窈窕淑女，寤寐求之。求之不得，寤寐思服。悠哉悠哉，辗转反侧。参差荇菜，左右采之"
		}
	}
}
</script>

<style>
</style>
