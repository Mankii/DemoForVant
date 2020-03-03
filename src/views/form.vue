<template>
	<page>
		<d-block title="基础用法">
			<van-form @submit="onSubmit">
				<van-field
				v-model="username"
				name="用户名"
				label="用户名"
				placeholder="用户名"
				:rules="[{ required: true, message: '请填写用户名' }]"
				/>
				<van-field
				v-model="password"
				type="password"
				name="密码"
				label="密码"
				placeholder="密码"
				:rules="[{ required: true, message: '请填写密码' }]"
				/>
				<div style="margin: 16px;">
					<van-button round block type="info" native-type="submit">
					提交
					</van-button>
				</div>
			</van-form>
		</d-block>
		<d-block title="校验规则">
			<van-form validate-first @failed="onFailed">
				<!-- 通过 pattern 进行正则校验 -->
				<van-field
					v-model="value1"
					name="pattern"
					placeholder="正则校验"
					:rules="[{ pattern, message: '请输入正确内容' }]"
				/>
				<!-- 通过 validator 进行函数校验 -->
				<van-field
					v-model="value2"
					name="validator"
					placeholder="函数校验"
					:rules="[{ validator, message: '请输入10位数字' }]"
				/>
				<!-- 通过 validator 进行异步函数校验 -->
				<van-field
					v-model="value3"
					name="asyncValidator"
					placeholder="异步函数校验"
					:rules="[{ validator: asyncValidator, message: '请输入6位数字' }]"
				/>
				<div style="margin: 16px;">
					<van-button round block type="info" native-type="submit">
					提交
					</van-button>
				</div>
			</van-form>
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
				username: '',
				password: '',
				
				value1: '',
				value2: '',
				value3: '',
				pattern: /\d{6}/,
			};
		},
		methods: {
			onSubmit(values) {
				console.log('submit', values);
			},
			// 校验函数返回 true 表示校验通过，false 表示不通过
			validator(val) {
				return /1\d{10}/.test(val);
			},
			// 异步校验函数返回 Promise
			asyncValidator(val) {
				return new Promise(resolve => {
					this.$toast.loading('验证中...');

					setTimeout(() => {
						this.$toast.clear();
						resolve(/\d{6}/.test(val));
					}, 1000);
				});
			},
			onFailed(errorInfo) {
				console.log('failed', errorInfo);
			},
		},
	};
</script>

<style>
</style>
