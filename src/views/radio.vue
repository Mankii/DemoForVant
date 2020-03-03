<template>
	<page>
		<d-block title="基础用法">
			<van-radio-group v-model="radio">
				<van-radio name="1">单选框 1</van-radio>
				<van-radio name="2">单选框 2</van-radio>
			</van-radio-group>
		</d-block>
		<d-block title="水平排列">
			<van-radio-group v-model="radio_1" direction="horizontal">
				<van-radio name="1">单选框 1</van-radio>
				<van-radio name="2">单选框 2</van-radio>
			</van-radio-group>
		</d-block>
		<d-block title="禁用状态">
			<van-radio-group v-model="radio_2" disabled>
				<van-radio name="1">单选框 1</van-radio>
				<van-radio name="2">单选框 2</van-radio>
			</van-radio-group>
		</d-block>
		<d-block title="自定义形状">
			<van-radio-group v-model="radio_3">
				<van-radio name="1" shape="square">单选框 1</van-radio>
				<van-radio name="2" shape="square">单选框 2</van-radio>
			</van-radio-group>
		</d-block>
		<d-block title="自定义颜色">
			<van-radio-group v-model="radio_4">
				<van-radio name="1" checked-color="#07c160">单选框 1</van-radio>
				<van-radio name="2" checked-color="#07c160">单选框 2</van-radio>
			</van-radio-group>
		</d-block>
		<d-block title="自定义大小">
			<van-radio-group v-model="radio_5">
				<van-radio name="1" icon-size="24px">单选框 1</van-radio>
				<van-radio name="2" icon-size="24px">单选框 2</van-radio>
			</van-radio-group>
		</d-block>
		<d-block title="自定义图标">
			<van-radio-group v-model="radio_6">
				<van-radio name="1">
					单选框 1
					<img slot="icon" slot-scope="props" :src="props.checked ? activeIcon : inactiveIcon">
				</van-radio>
				<van-radio name="2">
					单选框 2
					<img slot="icon" slot-scope="props" :src="props.checked ? activeIcon : inactiveIcon">
				</van-radio>
			</van-radio-group>
		</d-block>
		<d-block title="禁用文本点击">
			<van-radio-group v-model="radio_7">
				<van-radio name="1" label-disabled>单选框 1</van-radio>
				<van-radio name="2" label-disabled>单选框 2</van-radio>
			</van-radio-group>
		</d-block>
		<d-block title="与 Cell 组件一起使用">
			<van-radio-group v-model="radio_8">
				<van-cell-group>
					<van-cell title="单选框 1" clickable @click="radio_8 = '1'">
						<van-radio slot="right-icon" name="1" />
					</van-cell>
					<van-cell title="单选框 2" clickable @click="radio_8 = '2'">
						<van-radio slot="right-icon" name="2" />
					</van-cell>
				</van-cell-group>
			</van-radio-group>
		</d-block>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				radio: '1',
				radio_1: '1',
				radio_2: '1',
				radio_3: '1',
				radio_4: '1',
				radio_5: '1',
				radio_6: '1',
				activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
				inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
				radio_7: '1',
				radio_8: '1',
			}
		}
	};
</script>

<style>
	.van-radio {
		margin-bottom: 8px;
	}
	.van-radio img {
		height: 20px;
	}
</style>
