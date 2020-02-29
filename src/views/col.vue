<template>
	<page>
		<van-row>
			<van-col span="8">span: 8</van-col>
			<van-col span="8">span: 8</van-col>
			<van-col span="8">span: 8</van-col>
		</van-row>

		<van-row>
			<van-col span="4">span: 4</van-col>
			<van-col span="10" offset="4">offset: 4, span: 10</van-col>
		</van-row>

		<van-row>
			<van-col offset="12" span="12">offset: 12, span: 12</van-col>
		</van-row>
		
		<van-row gutter="20">
			<van-col span="8">span: 8</van-col>
			<van-col span="8">span: 8</van-col>
			<van-col span="8">span: 8</van-col>
		</van-row>


		<!-- 左对齐 -->
		<van-row type="flex">
			<van-col span="6">span: 6</van-col>
			<van-col span="6">span: 6</van-col>
			<van-col span="6">span: 6</van-col>
		</van-row>

		<!-- 居中 -->
		<van-row type="flex" justify="center">
			<van-col span="6">span: 6</van-col>
			<van-col span="6">span: 6</van-col>
			<van-col span="6">span: 6</van-col>
		</van-row>

		<!-- 右对齐 -->
		<van-row type="flex" justify="end">
			<van-col span="6">span: 6</van-col>
			<van-col span="6">span: 6</van-col>
			<van-col span="6">span: 6</van-col>
		</van-row>

		<!-- 两端对齐 -->
		<van-row type="flex" justify="space-between">
			<van-col span="6">span: 6</van-col>
			<van-col span="6">span: 6</van-col>
			<van-col span="6">span: 6</van-col>
		</van-row>

		<!-- 每个元素的两侧间隔相等 -->
		<van-row type="flex" justify="space-around">
			<van-col span="6">span: 6</van-col>
			<van-col span="6">span: 6</van-col>
			<van-col span="6">span: 6</van-col>
		</van-row>
	</page>
</template>

<script>
	
</script>

<style>
	.van-col {
		margin-bottom: 10px;
		color: #fff;
		font-size: 13px;
		line-height: 30px;
		text-align: center;
		background-clip: content-box;
	}
	.van-col:nth-child(odd) {
		background-color: #39a9ed;
	}
	.van-col:nth-child(even) {
		background-color: #66c6f2;
	}
</style>
