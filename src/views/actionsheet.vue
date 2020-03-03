<template>
	<page class="demo-grey">
		<d-block title="基础用法">
			<van-cell title="基础用法" is-link @click="show1 = true"></van-cell>
			<van-action-sheet v-model="show1" :actions="actions1" @select="onSelect1" />

			<van-cell title="展示取消按钮" is-link @click="show2 = true"></van-cell>
			<van-action-sheet v-model="show2" :actions="actions2" cancel-text="取消" @cancel="onCancel2" />

			<van-cell title="基础用法" is-link @click="show3 = true"></van-cell>
			<van-action-sheet v-model="show3" :actions="actions3" description="这是一段描述信息" />
		</d-block>
		<d-block title="选项状态">
			<van-cell title="选项状态" is-link @click="show4 = true"></van-cell>
			<van-action-sheet v-model="show4" :actions="actions4" cancel-text="取消" @cancel="onCancel4" />
		</d-block>
		<d-block title="自定义面板">
			<van-cell title="选项状态" is-link @click="show5 = true"></van-cell>
			<van-action-sheet v-model="show5" title="标题">
				<div class="content">内容</div>
			</van-action-sheet>
		</d-block>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				show1: false,
				actions1: [{
						name: '选项'
					},
					{
						name: '选项'
					},
					{
						name: '选项',
						subname: '描述信息'
					}
				],


				show2: false,
				actions2: [{
						name: '选项'
					},
					{
						name: '选项'
					},
					{
						name: '选项',
						subname: '描述信息'
					}
				],


				show3: false,
				actions3: [{
						name: '选项'
					},
					{
						name: '选项'
					},
					{
						name: '选项',
						subname: '描述信息'
					}
				],

				show4: false,
				actions4: [{
						name: '选项',
						color: '#07c160'
					},
					{
						loading: true
					},
					{
						name: '禁用选项',
						disabled: true
					}
				],
				show5: false,

			};
		},
		methods: {
			onSelect1(item) {
				// 默认情况下点击选项时不会自动收起
				// 可以通过 close-on-click-action 属性开启自动收起
				this.show1 = false;
				this.$toast(item.name);
			},
			onCancel2() {
				this.show2 = false;
				this.$toast('cancel');
			},
			onCancel4() {
				this.show4 = false;
				this.$toast('cancel');
			}
		}
	}
</script>

<style>
	.content {
		padding: 16px 16px 160px;
	}
</style>
