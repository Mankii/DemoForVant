<template>
	<page class="demo-grey">
		<d-block title="基础用法">
			<div class="p-20">
				<van-address-edit :area-list="areaList" 
					show-postal 
					show-delete 
					show-set-default 
					show-search-result 
					:search-result="searchResult"
					:area-columns-placeholder="['请选择', '请选择', '请选择']" 
					@save="onSave" 
					@delete="onDelete" 
					@change-detail="onChangeDetail" />
			</div>
		</d-block>
	</page>
</template>

<script>
	import areaList from "../assets/area/area.js" // 引入地址数据
	export default {
		data() {
			return {
				areaList: areaList,
				searchResult: []
			}
		},
		methods: {
			onSave(content) {
				console.log(content)
				this.$toast('save');
			}, 
			onDelete(content) {
				console.log(content)
				this.$toast('delete');
			},
			onChangeDetail(val) {
				if (val) {
					this.searchResult = [{
						name: '黄龙万科中心',
						address: '杭州市西湖区'
					}];
				} else {
					this.searchResult = [];
				}
			}
		}
	}
</script>

<style>
</style>
