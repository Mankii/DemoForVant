<template>
	<page>
		<van-tabs v-model="active" class="demo-pull-refresh">

			<van-tab title="基础用法">
				<van-index-bar :sticky-offset-top="56">
					<van-index-anchor index="A" />
					<van-cell title="文本" />
					<van-cell title="文本" />
					<van-cell title="文本" />

					<van-index-anchor index="B" />
					<van-cell title="文本" />
					<van-cell title="文本" />
					<van-cell title="文本" />


					<van-index-anchor index="C" />
					<van-cell title="文本" />
					<van-cell title="文本" />
					<van-cell title="文本" />

					<van-index-anchor index="D" />
					<van-cell title="文本" />
					<van-cell title="文本" />
					<van-cell title="文本" />

					<van-index-anchor index="E" />
					<van-cell title="文本" />
					<van-cell title="文本" />
					<van-cell title="文本" />

					<van-index-anchor index="F" />
					<van-cell title="文本" />
					<van-cell title="文本" />
					<van-cell title="文本" />
					
				</van-index-bar>
			</van-tab>

			<van-tab title="自定义索引列表">
				<van-index-bar :index-list="indexList" :sticky-offset-top="56">

					<van-index-anchor index="1">标题1</van-index-anchor>
					<van-cell title="文本" />
					<van-cell title="文本" />
					<van-cell title="文本" />

					<van-index-anchor index="2">标题2</van-index-anchor>
					<van-cell title="文本" />
					<van-cell title="文本" />
					<van-cell title="文本" />

					<van-index-anchor index="3">标题3</van-index-anchor>
					<van-cell title="文本" />
					<van-cell title="文本" />
					<van-cell title="文本" />

					<van-index-anchor index="4">标题4</van-index-anchor>
					<van-cell title="文本" />
					<van-cell title="文本" />
					<van-cell title="文本" />

					<van-index-anchor index="5">标题5</van-index-anchor>
					<van-cell title="文本" />
					<van-cell title="文本" />
					<van-cell title="文本" />

					<van-index-anchor index="6">标题6</van-index-anchor>
					<van-cell title="文本" />
					<van-cell title="文本" />
					<van-cell title="文本" />

					
				</van-index-bar>
			</van-tab>

		</van-tabs>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
			}
		}
	}
</script>

<style>
	.demo-pull-refresh .van-tab__pane {
		height: calc(100vh - 44px - 56px);
	}
</style>
