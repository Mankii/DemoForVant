<template>
	<page class="demo-grey">
		<d-block title="基础用法">
			<van-picker :columns="columns" @change="onChange" />
		</d-block>
		<d-block title="默认选中项">
			<van-picker :columns="columns" :default-index="2" />
		</d-block>
		<d-block title="展示顶部栏">
			<van-picker show-toolbar title="标题" :columns="columns" @cancel="onCancel" @confirm="onConfirm" />
		</d-block>
		<d-block title="多列选择">
			<van-picker show-toolbar title="标题" :columns="columns_1" />
		</d-block>
		<d-block title="级联选择">
			
			<van-picker show-toolbar title="标题" :columns="columns_2" />
		</d-block>
		<d-block title="禁用选项">
			<van-picker :columns="columns_3" />
		</d-block>
		<d-block title="动态设置选项">
			<van-picker :columns="columns_4" @change="onChange_4" />
		</d-block>
		<d-block title="加载状态">
			<van-picker :columns="columns_5" :loading="loading_5" />
		</d-block>
		<d-block title="搭配弹出层使用">
			<van-field
				readonly
				clickable
				label="城市"
				:value="value_6"
				placeholder="选择城市"
				@click="showPicker_6 = true"
			/>
			<van-popup v-model="showPicker_6" position="bottom">
				<van-picker
					show-toolbar
					:columns="columns_6"
					@cancel="showPicker_6 = false"
					@confirm="onConfirm_6"
				/>
			</van-popup>
		</d-block>
		<d-block title="">

		</d-block>
	</page>
</template>

<script>
	const citys = {
		'浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
		'福建': ['福州', '厦门', '莆田', '三明', '泉州']
	};
	export default {
		data() {
			return {
				columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
				columns_1: [
					// 第一列
					{
						values: ['周一', '周二', '周三', '周四', '周五'],
						defaultIndex: 2
					},
					// 第二列
					{
						values: ['上午', '下午', '晚上'],
						defaultIndex: 1
					}
				],
				columns_2: [{
					text: '浙江',
					children: [{
						text: '杭州',
						children: [{
							text: '西湖区'
						}, {
							text: '余杭区'
						}]
					}, {
						text: '温州',
						children: [{
							text: '鹿城区'
						}, {
							text: '瓯海区'
						}]
					}]
				}, {
					text: '福建',
					children: [{
						text: '福州',
						children: [{
							text: '鼓楼区'
						}, {
							text: '台江区'
						}]
					}, {
						text: '厦门',
						children: [{
							text: '思明区'
						}, {
							text: '海沧区'
						}]
					}]
				}],
				columns_3: [
					{ text: '杭州', disabled: true },
					{ text: '宁波' },
					{ text: '温州' }
				],
				columns_4: [
					{ values: Object.keys(citys) },
					{ values: citys['浙江'] }
				],
				columns_5: [],
				loading_5: true,
				value_6: '',
				showPicker_6: false,
				columns_6: ['杭州', '宁波', '温州', '嘉兴', '湖州']
			};
		},
		created() {
			setTimeout(() => {
				this.loading_5 = false;
				this.columns_5 = ['杭州', '宁波', '温州', '嘉兴', '湖州'];
			}, 3000);
		},
		methods: {
			onChange(picker, value, index) {
				this.$toast(`当前值：${value}, 当前索引：${index}`);
			},
			onConfirm(value, index) {
				this.$toast(`当前值：${value}, 当前索引：${index}`);
			},
			onCancel() {
				this.$toast('取消');
			},
			onChange_4(picker, values) {
				picker.setColumnValues(1, citys[values[0]]);
			},
			onConfirm_6(value) {
				this.value_6 = value;
				this.showPicker_6 = false;
			}
		}
	};
</script>

<style>
</style>
