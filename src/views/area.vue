<template>
	<page class="demo-grey">
		<d-block title="基础用法">
			<van-area :area-list="areaList" />
		</d-block>
		<d-block title="选中省市区">
			<van-area :area-list="areaList" value="110101" />
		</d-block>
		<d-block title="配置显示列">
			<van-area :area-list="areaList" :columns-num="2" title="标题" />
		</d-block>
		<d-block title="配置列占位提示文字">
			<van-area
				:area-list="areaList"
				:columns-placeholder="['请选择', '请选择', '请选择']"
				title="标题"
			/>
		</d-block>
		<d-block title="弹出">
			<van-button type="primary" @click="show=true" style="margin: 0 20px 20px">弹出地址选择</van-button>
			<van-popup v-model="show" position="bottom">
				<van-area
					:area-list="areaList"
					swipe-duration="300"
					:columns-placeholder="['请选择', '请选择', '请选择']"
					title="标题"
					@confirm="onConfirm"
					@cancel="onCancel"
					@change="onChange"
				/>
			</van-popup>
		</d-block>
	</page>
</template>

<script>
	import areaList from "../assets/area/area.js" // 引入地址数据
	export default {
		data() {
			return {
				show: false,
				areaList: areaList
			}
		},
		methods:{
			onConfirm(e){
				console.log(e)
				this.$toast("onConfirm")
				this.show = false;
			},
			onCancel(){
				this.$toast("onCancel")
				this.show = false;
			},
			onChange(a,b,c){
				console.log(a)
				console.log(b)
				console.log(c)
				this.$toast("onChange")
			},
		}
	}
</script>

<style>
</style>
