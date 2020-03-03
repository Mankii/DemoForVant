<template>
	<page class="demo-grey">
		<d-block title="基础用法">
			<van-cell-group>
				<van-field v-model="value" placeholder="请输入用户名" />
			</van-cell-group>
		</d-block>
		<d-block title="自定义类型">
			<!-- 输入任意文本 -->
			<van-field v-model="text" label="文本" />
			<!-- 输入手机号，调起手机号键盘 -->
			<van-field v-model="tel" type="tel" label="手机号" />
			<!-- 允许输入整数，调起数字键盘 -->
			<van-field v-model="digit" type="digit" label="整数" />
			<!-- 允许输入数字，调起全键盘 -->
			<van-field v-model="number" type="number" label="数字" />
			<!-- 输入密码 -->
			<van-field v-model="password" type="password" label="密码" />
		</d-block>
		<d-block title="禁用输入框">
			<van-cell-group>
				<van-field label="文本" value="输入框只读" readonly />
				<van-field label="文本" value="输入框已禁用" disabled />
			</van-cell-group>
		</d-block>
		<d-block title="显示图标">
			<van-cell-group>
				<van-field
					v-model="value1"
					label="文本"
					left-icon="smile-o"
					right-icon="warning-o"
					placeholder="显示图标"
				/>
				<van-field
					v-model="value2"
					clearable
					label="文本"
					left-icon="music-o"
					placeholder="显示清除图标"
				/>
			</van-cell-group>
		</d-block>
		<d-block title="错误提示">
			<van-cell-group>
				<van-field
					v-model="username"
					error
					required
					label="用户名"
					placeholder="请输入用户名"
				/>
				<van-field
					v-model="phone"
					required
					label="手机号"
					placeholder="请输入手机号"
					error-message="手机号格式错误"
				/>
			</van-cell-group>
		</d-block>
		<d-block title="插入按钮">
			<van-field
				v-model="sms"
				center
				clearable
				label="短信验证码"
				placeholder="请输入短信验证码"
			>
				<van-button slot="button" size="small" type="primary">发送验证码</van-button>
			</van-field>
		</d-block>
		<d-block title="格式化输入内容">
			<van-field
				v-model="value"
				label="文本"
				:formatter="formatter"
				placeholder="格式化输入内容"
			/>
		</d-block>
		<d-block title="高度自适应">
			<van-field
				v-model="message"
				rows="1"
				autosize
				label="留言"
				type="textarea"
				placeholder="请输入留言"
			/>
		</d-block>
		<d-block title="显示字数统计">
			<van-field
				v-model="message"
				rows="2"
				autosize
				label="留言"
				type="textarea"
				maxlength="50"
				placeholder="请输入留言"
				show-word-limit
			/>
		</d-block>
		<d-block title="输入框内容对齐">
			<van-field
				v-model="value"
				label="文本"
				placeholder="输入框内容右对齐"
				input-align="right"
			/>
		</d-block>
	</page>
</template>

<script>
	export default{
		data(){
			return {
				value: '',
				tel: '',
				text: '',
				digit: '',
				number: '',
				password: '',
				value1: '',
				value2: '123',
				username: '',
				phone: '',
				sms: '',
				message: ''
			}
		},
		methods: {
			formatter(value) {
				// 过滤输入的数字
				return value.replace(/\d/g, '');
			}
		}
	}
</script>

<style>
</style>
