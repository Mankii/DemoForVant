<template>
	<page class="demo-icon">
		<van-tabs v-model="active">
			<van-tab title="基本用例">
					<d-block title="基础用法">
						<van-icon name="chat-o" />
						<van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
					</d-block>
					<d-block title="提示信息">
						<van-icon name="chat-o" dot />
						<van-icon name="chat-o" info="9" />
						<van-icon name="chat-o" info="99+" />
					</d-block>
					<d-block title="图标颜色">
						<van-icon name="chat-o" color="#1989fa" />
						<van-icon name="chat-o" color="#07c160" />
					</d-block>
					<d-block title="图标大小">
						<van-icon name="chat-o" size="40" />
						<van-icon name="chat-o" size="3rem" />
					</d-block>
			</van-tab>
			<van-tab title="基础图标">
				<van-grid>
					<van-grid-item v-for="(item,index) in list1" :key="index" :icon="item" :text="item" />
				</van-grid>
			</van-tab>
			<van-tab title="所有图标">
				<van-grid>
					<van-grid-item v-for="(item,index) in list2" :key="index" :icon="item" :text="item" />
				</van-grid>
			</van-tab>
		</van-tabs>
	</page>
</template>

<script>
	export default{
		data() {
			return {
				active: 0,
				list1: [ "success", "plus", "cross", "fail", "arrow", "arrow-left", "arrow-up", "arrow-down"],
				list2: [ "add-o", "add-square","add","after-sale","aim","alipay","apps-o","arrow-down","arrow-left","arrow-up","arrow","ascending","audio","award-o","award","bag-o","bag","balance-list-o","balance-list","balance-o","balance-pay","bar-chart-o","bars","bell","bill-o","bill","birthday-cake-o","bookmark-o","bookmark","browsing-history-o","browsing-history","brush-o","bulb-o","bullhorn-o","calender-o","card","cart-circle-o","cart-circle","cart-o","cart","cash-back-record","cash-on-deliver","cashier-o","certificate","chart-trending-o","chat-o","chat","checked","circle","clear","clock-o","clock","close","closed-eye","cluster-o","cluster","column","comment-circle-o","comment-circle","comment-o","comment","completed","contact","coupon-o","coupon","credit-pay","cross","debit-pay","delete","descending","description","desktop-o","diamond-o","diamond","discount","down","ecard-pay","edit","ellipsis","empty","envelop-o","exchange","expand-o","expand","eye-o","eye","fail","failure","filter-o","fire-o","fire","flag-o","flower-o","free-postage","friends-o","friends","gem-o","gem","gift-card-o","gift-card","gift-o","gift","gold-coin-o","gold-coin","good-job-o","good-job","goods-collect-o","goods-collect","graphic","home-o","hot-o","hot-sale-o","hot-sale","hot","hotel-o","idcard","info-o","info","invition","label-o","label","like-o","like","live","location-o","location","lock","logistics","manager-o","manager","map-marked","medal-o","medal","more-o","more","music-o","music","new-arrival-o","new-arrival","new-o","new","newspaper-o","notes-o","orders-o","other-pay","paid","passed","pause-circle-o","pause-circle","pause","peer-pay","pending-payment","phone-circle-o","phone-circle","phone-o","phone","photo-o","photo","photograph","play-circle-o","play-circle","play","plus","point-gift-o","point-gift","points","printer","qr-invalid","qr","question-o","question","records","refund-o","replay","scan","search","send-gift-o","send-gift","service-o","service","setting-o","setting","share","shop-collect-o","shop-collect","shop-o","shop","shopping-cart-o","shopping-cart","shrink","sign","smile-comment-o","smile-comment","smile-o","smile","star-o","star","stop-circle-o","stop-circle","stop","success","thumb-circle-o","thumb-circle","todo-list-o","todo-list","tosend","tv-o","umbrella-circle","underway-o","underway","upgrade","user-circle-o","user-o","video-o","video","vip-card-o","vip-card","volume-o","volume","wap-home-o","wap-home","wap-nav","warn-o","warning-o","warning","weapp-nav","wechat","youzan-shield" ]
			};
		}
	}
	
</script>

<style>
	.demo-icon .van-icon {
		margin: 0 16px;
		color: #323233;
		font-size: 32px;
	}
</style>
