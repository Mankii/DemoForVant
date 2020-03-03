<template>
	<page>
		<d-block title="基础用法">
			<van-button type="primary" text="显示遮罩层" @click="show1 = true" />
			<van-overlay :show="show1" @click="show1 = false" />
		</d-block>
		<d-block title="嵌入内容">
			<van-button type="primary" text="显示遮罩层" @click="show2 = true" />
			<van-overlay :show="show2" @click="show2 = false">
				<div class="wrapper" @click.stop>
					<div class="block" @click="show2 = false">点这里关闭</div>
				</div>
			</van-overlay>
		</d-block>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				show1: false,
				show2: false
			}
		}
	}
</script>

<style>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>
