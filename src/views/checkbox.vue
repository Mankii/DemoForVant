<template>
	<page>
		<d-block title="基础用法">
			<van-checkbox v-model="checked">复选框</van-checkbox>
		</d-block>
		<d-block title="禁用状态">
			<van-checkbox v-model="checked" disabled>复选框</van-checkbox>
		</d-block>
		<d-block title="自定义形状">
			<van-checkbox v-model="checked" shape="square">复选框</van-checkbox>
		</d-block>
		<d-block title="自定义颜色">
			<van-checkbox v-model="checked" checked-color="#07c160">复选框</van-checkbox>
		</d-block>
		<d-block title="自定义大小">
			<van-checkbox v-model="checked" icon-size="24px">复选框</van-checkbox>
		</d-block>
		<d-block title="自定义图标">
			<van-checkbox v-model="checked" class="demo-checkbox">
				自定义图标
				<img
				slot="icon"
				slot-scope="props"
				:src="props.checked ? activeIcon : inactiveIcon"
				>
			</van-checkbox>
		</d-block>
		<d-block title="禁用文本点击">
			<van-checkbox v-model="checked" label-disabled>复选框</van-checkbox>
		</d-block>
		<d-block title="复选框组">
			<van-checkbox-group v-model="result">
				<van-checkbox name="a">复选框 a</van-checkbox>
				<van-checkbox name="b">复选框 b</van-checkbox>
				<van-checkbox name="c">复选框 c</van-checkbox>
			</van-checkbox-group>
		</d-block>
		<d-block title="限制最大可选数">
			<van-checkbox-group v-model="result" :max="2">
				<van-checkbox name="a">复选框 a</van-checkbox>
				<van-checkbox name="b">复选框 b</van-checkbox>
				<van-checkbox name="c">复选框 c</van-checkbox>
			</van-checkbox-group>
		</d-block>
		<d-block title="全选与反选">
			<van-checkbox-group v-model="result" ref="checkboxGroup">
				<van-checkbox name="a">复选框 a</van-checkbox>
				<van-checkbox name="b">复选框 b</van-checkbox>
				<van-checkbox name="c">复选框 c</van-checkbox>
			</van-checkbox-group>
			
			<van-button type="primary" @click="checkAll">全选</van-button>
			<van-button type="info" @click="toggleAll">反选</van-button>
		</d-block>
		<d-block title="搭配单元格组件使用">
			<van-checkbox-group v-model="result">
				<van-cell-group>
				<van-cell
					v-for="(item, index) in list"
					clickable
					:key="item"
					:title="`复选框 ${item}`"
					@click="toggle(index)"
				>
				<van-checkbox slot="right-icon" :name="item" ref="checkboxes" />
				</van-cell>
				</van-cell-group>
			</van-checkbox-group>
		</d-block>
	</page>
</template>

<script>
	export default {
		data() {
		return {
				checked: true,
				activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
				inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
				result: ['a', 'b'],
				list: ['a', 'b']
			};
		},
		methods: {
			checkAll() {
				this.$refs.checkboxGroup.toggleAll(true);
			},
			toggleAll() {
				this.$refs.checkboxGroup.toggleAll();
			},
			toggle(index) {
				this.$refs.checkboxes[index].toggle();
			}
		}
	};
</script>

<style>
	.demo-checkbox img {
		height: 20px;
	}
</style>
