<template>
	<page class="demo-grey">
		<d-block title="基础用法">
			<van-dropdown-menu>
				<van-dropdown-item v-model="value1" :options="option1" />
				<van-dropdown-item v-model="value2" :options="option2" />
			</van-dropdown-menu>
		</d-block>
		<d-block title="自定义菜单内容">
			<van-dropdown-menu>
				<van-dropdown-item v-model="value" :options="option" />
				<van-dropdown-item title="筛选" ref="item">
					<van-switch-cell v-model="switch1" title="包邮" />
					<van-switch-cell v-model="switch2" title="团购" />
					<van-button block type="info" @click="onConfirm">确认</van-button>
				</van-dropdown-item>
			</van-dropdown-menu>
		</d-block>
		<d-block title="自定义选中态颜色">
			<van-dropdown-menu active-color="#ee0a24">
				<van-dropdown-item v-model="value1" :options="option1" />
				<van-dropdown-item v-model="value2" :options="option2" />
			</van-dropdown-menu>
		</d-block>
		<d-block title="向上展开">
			<van-dropdown-menu direction="up">
				<van-dropdown-item v-model="value1" :options="option1" />
				<van-dropdown-item v-model="value2" :options="option2" />
			</van-dropdown-menu>
		</d-block>
		<d-block title="禁用菜单">
			<van-dropdown-menu>
				<van-dropdown-item v-model="value1" disabled :options="option1" />
				<van-dropdown-item v-model="value2" disabled :options="option2" />
			</van-dropdown-menu>
		</d-block>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				value1: 0,
				value2: 'a',
				option1: [{
						text: '全部商品',
						value: 0
					},
					{
						text: '新款商品',
						value: 1
					},
					{
						text: '活动商品',
						value: 2
					}
				],
				option2: [{
						text: '默认排序',
						value: 'a'
					},
					{
						text: '好评排序',
						value: 'b'
					},
					{
						text: '销量排序',
						value: 'c'
					},
				],


				value: 0,
				switch1: false,
				switch2: false,
				option: [{
						text: '全部商品',
						value: 0
					},
					{
						text: '新款商品',
						value: 1
					},
					{
						text: '活动商品',
						value: 2
					}
				]
			}
		},
		methods: {
			onConfirm() {
				this.$refs.item.toggle();
			}
		}
	};
</script>

<style>
</style>
