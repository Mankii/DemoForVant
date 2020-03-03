<template>
	<page class="demo-grey">
		<d-block title="基础用法">
			<!-- 密码输入框 -->
			<van-password-input :value="value" info="密码为 6 位数字" :focused="showKeyboard" @focus="showKeyboard = true" />
			<!-- 数字键盘 -->
			<van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false" />
		</d-block>
		<d-block title="自定义长度">
			<van-password-input :value="value_1" :length="4" :gutter="15" :focused="showKeyboard_1" @focus="showKeyboard_1 = true" />
			<!-- 数字键盘 -->
			<van-number-keyboard :show="showKeyboard_1" @input="onInput_1" @delete="onDelete_1" @blur="showKeyboard_1 = false" />
		</d-block>
		<d-block title="明文展示">
			<van-password-input :value="value_2" :mask="false" :focused="showKeyboard_2" @focus="showKeyboard_2 = true" />
			<!-- 数字键盘 -->
			<van-number-keyboard :show="showKeyboard_2" @input="onInput_2" @delete="onDelete_2" @blur="showKeyboard_2 = false" />
		</d-block>
		<d-block title="错误提示">
			<!-- 密码输入框 -->
			<van-password-input :value="value_3" :error-info="errorInfo_3" :focused="showKeyboard_3" @focus="showKeyboard_3 = true" />
			<!-- 数字键盘 -->
			<van-number-keyboard :show="showKeyboard_3" @input="onInput_3" @delete="onDelete_3" @blur="showKeyboard_3 = false" />
		</d-block>
		<d-block title="">

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
				value: '123',
				showKeyboard: false,
				value_1: '123',
				showKeyboard_1: false,
				value_2: '123',
				showKeyboard_2: false,
				value_3: '123',
				showKeyboard_3: false,
				errorInfo_3: ''
			};
		},
		methods: {
			onInput(key) {
				this.value = (this.value + key).slice(0, 6);
			},
			onDelete() {
				this.value = this.value.slice(0, this.value.length - 1);
			},
			onInput_1(key) {
				this.value_1 = (this.value_1 + key).slice(0, 6);
			},
			onDelete_1() {
				this.value_1 = this.value_1.slice(0, this.value_1.length - 1);
			},
			onInput_2(key) {
				this.value_2 = (this.value_2 + key).slice(0, 6);
			},
			onDelete_2() {
				this.value_2 = this.value_2.slice(0, this.value_2.length - 1);
			},
			onInput_3(key) {
				this.value_3 = (this.value_3 + key).slice(0, 6);
				if (this.value_3.length === 6) {
					this.errorInfo_3 = '密码错误';
				} else {
					this.errorInfo_3 = '';
				}
			},
			onDelete_3() {
				this.value_3 = this.value_3.slice(0, this.value_3.length - 1);
			}
		}
	}
</script>

<style>
</style>
