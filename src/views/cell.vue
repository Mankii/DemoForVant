<template>
	<page class="demo-grey">
		<d-block title="基础用法">
			<van-cell-group>
				<van-cell title="单元格" value="内容" />
				<van-cell title="单元格" value="内容" label="描述信息" />
			</van-cell-group>
		</d-block>
		<d-block title="单元格大小">
			<van-cell title="单元格" value="内容" size="large" />
			<van-cell title="单元格" value="内容" size="large" label="描述信息" />
		</d-block>
		<d-block title="展示图标">
			<van-cell title="单元格" icon="location-o" />
		</d-block>
		<d-block title="只设置 value">
			<van-cell value="内容" />
		</d-block>
		<d-block title="展示箭头">
			<van-cell title="单元格" is-link />
			<van-cell title="单元格" is-link value="内容" />
			<van-cell title="单元格" is-link arrow-direction="down" value="内容" />
		</d-block>
		<d-block title="页面导航">
			<van-cell title="URL 跳转" is-link url="/vant/mobile.html" />
			<van-cell title="路由跳转" is-link to="index" />
		</d-block>
		<d-block title="分组标题">
			<van-cell-group title="分组1">
				<van-cell title="单元格" value="内容" />
			</van-cell-group>
			<van-cell-group title="分组2">
				<van-cell title="单元格" value="内容" />
			</van-cell-group>
		</d-block>
		<d-block title="使用插槽">
			<d-row>
				<van-cell value="内容" is-link>
					<!-- 使用 title 插槽来自定义标题 -->
					<template slot="title">
						<span class="custom-title">单元格</span>
						<van-tag type="danger">标签</van-tag>
					</template>
				</van-cell>
			</d-row>
			<d-row>
				<van-cell title="单元格" icon="shop-o">
					<!-- 使用 right-icon 插槽来自定义右侧图标 -->
					<van-icon
						slot="right-icon"
						name="search"
						style="line-height: inherit;"
					/>
				</van-cell>
			</d-row>
		</d-block>
		<d-block title="垂直居中">
			<van-cell center title="单元格" value="内容" label="描述信息" />
		</d-block>
	</page>
</template>

<script>
	
</script>

<style>

</style>
