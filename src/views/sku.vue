<template>
	<page>
		<d-block title="基础用法">
			<van-button type="primary" block @click="show=true">基础用法</van-button>
			<van-sku
				v-model="show"
				:sku="sku"
				:goods="goods"
				:goods-id="goodsId"
				:quota="quota"
				:quota-used="quotaUsed"
				:hide-stock="sku.hide_stock"
				:message-config="messageConfig"
				@buy-clicked="onBuyClicked"
				@add-cart="onAddCartClicked"
			/>
		</d-block>
		<d-block title="高级用法">
			<van-button type="primary" block @click="show2=true">高级用法</van-button>
			<van-sku
				v-model="show2"
				stepper-title="我要买"
				:sku="sku"
				:goods="goods"
				:goods-id="goodsId"
				:quota="quota"
				:quota-used="quotaUsed"
				:hide-stock="sku.hide_stock"
				show-add-cart-btn
				reset-stepper-on-hide
				:initial-sku="initialSku"
				@buy-clicked="onBuyClicked"
				@add-cart="onAddCartClicked"
			>
				<!-- 自定义 sku-header-price -->
				<template slot="sku-header-price" slot-scope="props">
					<div class="van-sku__goods-price">
							<span class="van-sku__price-symbol">￥</span><span class="van-sku__price-num">{{ props.price }}</span>
					</div>
				</template>

				<!-- 自定义 sku actions -->
				<template slot="sku-actions" slot-scope="props">
					<div class="van-sku-actions">
							<van-button
								square
								size="large"
								type="warning"
								@click="onPointClicked"
							>
								积分兑换
							</van-button>
							<!-- 直接触发 sku 内部事件，通过内部事件执行 onBuyClicked 回调 -->
							<van-button
								square
								size="large"
								type="danger"
								@click="props.skuEventBus.$emit('sku:buy')"
							>
								买买买
							</van-button>
					</div>
				</template>
			</van-sku>
		</d-block>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				show2: false,
				goodsId: '946755',
				quota: 5, // 限购数量
				quotaUsed: 3, // 已购买数量
				sku: {
					// 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
					// 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
					tree: [{
						k: '颜色', // skuKeyName：规格类目名称
						v: [{
								id: '30349', // skuValueId：规格值 id
								name: '红色', // skuValueName：规格值名称
								imgUrl: 'https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
								previewImgUrl: 'https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg', // 用于预览显示的规格类目图片
							},
							{
								id: '1215',
								name: '蓝色',
								imgUrl: 'https://img.yzcdn.cn/2.jpg',
								previewImgUrl: 'https://img.yzcdn.cn/2.jpg',
							}
						],
						k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
					},{
						k: '尺寸',
						v: [{
								id: '1139',
								name: 'S'
							},
							{
								id: '3355',
								name: 'M'
							}
						],
						k_s: 's2'
					}],
					// 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
					list: [{
						id: 2259, // skuId，下单时后端需要
						price: 100, // 价格（单位分）
						s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
						s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
						s3: '0', // 最多包含3个规格值，为0表示不存在该规格
						stock_num: 110 // 当前 sku 组合对应的库存
					},{
						id: 2260, // skuId，下单时后端需要
						price: 105, // 价格（单位分）
						s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
						s2: '3355', // 规格类目 k_s 为 s2 的对应规格值 id
						s3: '0', // 最多包含3个规格值，为0表示不存在该规格
						stock_num: 210 // 当前 sku 组合对应的库存
					},{
						id: 2261, // skuId，下单时后端需要
						price: 180, // 价格（单位分）
						s1: '30349', // 规格类目 k_s 为 s1 的对应规格值 id
						s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
						s3: '0', // 最多包含3个规格值，为0表示不存在该规格
						stock_num: 0 // 当前 sku 组合对应的库存
					},{
						id: 2262, // skuId，下单时后端需要
						price: 160, // 价格（单位分）
						s1: '30349', // 规格类目 k_s 为 s1 的对应规格值 id
						s2: '3355', // 规格类目 k_s 为 s2 的对应规格值 id
						s3: '0', // 最多包含3个规格值，为0表示不存在该规格
						stock_num: 180 // 当前 sku 组合对应的库存
					}],
					price: '1.00', // 默认价格（单位元）
					stock_num: 227, // 商品总库存
					collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
					none_sku: false, // 是否无规格商品
					messages: [{
						// 商品留言
						datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
						multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
						name: '留言', // 留言名称
						type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
						required: '1', // 是否必填 '1' 表示必填
						placeholder: '' // 可选值，占位文本
					}],
					hide_stock: false // 是否隐藏剩余库存
				},
				goods: {
					// 默认商品 sku 缩略图
					picture: 'https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'
				},
				messageConfig: {
					// 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
					uploadImg: () => {
						return new Promise((resolve) => {
							setTimeout(() => resolve(
								'https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'), 1000);
						});
					},
					// 最大上传体积 (MB)
					uploadMaxSize: 3,
					// placeholder 配置
					placeholderMap: {
						text: '请留言备注',
						tel: '0755-12345678',
					},
					// 初始留言信息
					// 键：留言 name
					// 值：留言内容
					initialMessages: {
						留言: '留言信息'
					}
				},
				initialSku: {
					// 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
					// 值：skuValueId（规格值 id）
					s1: '30349',
					s2: '1193',
					// 初始选中数量
					selectedNum: 3,
					// 初始选中的商品属性
					// 键：属性id
					// 值：属性值id列表
					selectedProp: {
						123: [1222]
					}
				}
			};
		},
		methods:{
			onBuyClicked(e){
				console.log(e)
			},
			onAddCartClicked(e){
				console.log(e)
			},
			onPointClicked(e){
				console.log(e)
			}
		}
	}
</script>

<style>
</style>
