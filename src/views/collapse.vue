<template>
	<page class="demo-grey">
		<d-block title="基础用法">
			<van-collapse v-model="activeNames">
				<van-collapse-item title="标题1" name="1">内容</van-collapse-item>
				<van-collapse-item title="标题2" name="2">内容</van-collapse-item>
				<van-collapse-item title="标题3" name="3" disabled>内容</van-collapse-item>
			</van-collapse>
		</d-block>
		<d-block title="手风琴">
			<van-collapse v-model="activeName" accordion>
				<van-collapse-item title="标题1" name="1">内容</van-collapse-item>
				<van-collapse-item title="标题2" name="2">内容</van-collapse-item>
				<van-collapse-item title="标题3" name="3">内容</van-collapse-item>
			</van-collapse>
		</d-block>
		<d-block title="自定义标题内容">
			<van-collapse v-model="activeNames">
				<van-collapse-item name="1">
					<div slot="title">标题1
						<van-icon name="question-o" />
					</div>
					内容
				</van-collapse-item>
				<van-collapse-item title="标题2" name="2" icon="shop-o">
					内容
				</van-collapse-item>
			</van-collapse>
		</d-block>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				activeNames: ['1'],
				activeName: '1'
			};
		}
	};
</script>

<style>
</style>
