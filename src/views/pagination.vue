<template>
	<page>
		<d-block title="基础用法">
			<van-pagination v-model="currentPage" :total-items="24" :items-per-page="5" />
		</d-block>
		<d-block title="简单模式">
			<van-pagination v-model="currentPage" :page-count="12" mode="simple" />
		</d-block>
		<d-block title="显示省略号">
			<van-pagination v-model="currentPage" :total-items="125" :show-page-size="3" force-ellipses />
		</d-block>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				currentPage: 1
			}
		}
	}
</script>

<style>
</style>
