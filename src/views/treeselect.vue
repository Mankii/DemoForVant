<template>
	<page>
		<d-block title="单选模式">
			<van-tree-select :items="items" :active-id.sync="activeId" :main-active-index.sync="activeIndex" />
		</d-block>
		<d-block title="多选模式">
			<van-tree-select :items="items" :active-id.sync="activeIds" :main-active-index.sync="activeIndex2" />
		</d-block>
		<d-block title="自定义内容">
			<van-tree-select height="55vw" :items="items2" :main-active-index.sync="active">
				<template slot="content">
					<van-image v-if="active === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
					<van-image v-if="active === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
				</template>
			</van-tree-select>
		</d-block>
		<d-block title="提示信息">
			<van-tree-select height="55vw" :items="items3" :main-active-index.sync="activeIndex3" />
		</d-block>
		<d-block title="">

		</d-block>
		<d-block title="">

		</d-block>
		<d-block title="">

		</d-block>
	</page>
</template>

<script>
	const itemsData = [{
		// 导航名称
		text: '所有城市',
		// 导航名称右上角徽标
		info: 3,
		// 是否在导航名称右上角显示小红点
		dot: true,
		// 导航节点额外类名
		className: 'my-class',
		// 该导航下所有的可选项
		children: [{
				// 名称
				text: '温州',
				// id，作为匹配选中状态的标识符
				id: 1,
				// 禁用选项
				disabled: true
			},
			{
				text: '杭州',
				id: 2
			}
		]
	}]
	export default {
		data() {
			return {
				items: itemsData,
				activeId: 1,
				activeIndex1: 0,

				activeIds: [1, 2],
				activeIndex2: 0,

				active: 0,
				items2: [{
					text: '分组 1'
				}, {
					text: '分组 2'
				}],

				activeIndex3: 0,
				items3: [{
						text: '浙江',
						children: [],
						dot: true
					},
					{
						text: '江苏',
						children: [],
						info: 5
					}
				]
			};
		}
	}
</script>

<style>
</style>
