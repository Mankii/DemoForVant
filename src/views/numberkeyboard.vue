<template>
	<page class="demo-grey">
		<d-block title="默认样式">
			<van-button @touchstart.stop="show = true">
				弹出默认键盘
			</van-button>
			<van-number-keyboard :show="show" extra-key="." close-button-text="完成" @blur="show = false" @input="onInput" @delete="onDelete" />
		</d-block>
		<d-block title="自定义样式">
			<van-button type="info" @touchstart.stop="show_1 = true">
				弹出自定义键盘
			</van-button>
			<van-number-keyboard :show="show_1" theme="custom" extra-key="." close-button-text="完成" @blur="show_1 = false"
			@input="onInput" @delete="onDelete" />
		</d-block>
		<d-block title="双向绑定">
			<van-field readonly clickable :value="value_2" @touchstart.native.stop="show_2 = true" />
			<van-number-keyboard v-model="value_2" :show="show_2" :maxlength="6" @blur="show_2 = false" />
		</d-block>
		<d-block title="左下角按键内容">
			<van-button plain type="primary" @touchstart.stop="show_3 = true">
				弹出身份证号码键盘
			</van-button>

			<van-number-keyboard :show="show_3" close-button-text="完成" extra-key="X" @blur="show_3 = false" @input="onInput"
			@delete="onDelete" />
		</d-block>
		<d-block title="键盘标题">
			<van-button plain type="info" @touchstart.stop="show_4 = true">
				弹出自定义标题键盘
			</van-button>

			<van-number-keyboard :show="show_4" close-button-text="完成" title="键盘标题" extra-key="." @blur="show_4 = false" @input="onInput" @delete="onDelete" />
		</d-block>
		<d-block title="">

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
	export default {
		data() {
			return {
				show: false,
				show_1: false,
				show_2: false,
				value_2: '',
				show_3: false,
				show_4: false,
			}
		},
		methods: {
			onInput(value) {
				this.$toast(value);
			},
			onDelete() {
				this.$toast('删除');
			}
		}
	}
</script>

<style>
</style>
