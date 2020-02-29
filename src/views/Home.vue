<template>
  <div class="home">
	<div class="demo-home"> 
		<h1 class="demo-home__title">
			<img src="https://img.yzcdn.cn/vant/logo.png"/>
			<span>Vant</span>
		</h1> 
		<h2 class="demo-home__desc"> 轻量、可靠的移动端 Vue 组件库 </h2>
		<div class="demo-home-nav" v-for="(nav_item,nav_index) in nav" :key="nav_index"> 
			<div class="demo-home-nav__title">
			{{nav_item.title}}
			</div> 
			<div v-if="nav_item.child && nav_item.child.length > 0" class="demo-home-nav__group"> 
				<router-link v-for="(link_item,link_index) in nav_item.child" :key="link_item+''+link_index" :to="link_item.name" class="demo-home-nav__block">
					{{link_item.name}} {{link_item.title}}
					<svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
						<path fill="#B6C3D2" d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
						<path fill="#B6C3D2" d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
					</svg>
				</router-link>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
		nav: [{title:"基础组件",child:[{name:"button",title:"按钮"},{name:"cell",title:"单元格"},{name:"icon",title:"图标"},{name:"image",title:"图片"},{name:"col",title:"布局"},{name:"popup",title:"弹出层"},{name:"style",title:"内置样"},]},{title:"表单组件",child:[{name:"calendar",title:"日历 "},{name:"checkbox",title:"复选框"},{name:"datetimePicker",title:"时间选"},{name:"field",title:"输入框"},{name:"form",title:"表单 "},{name:"numberKeyboard",title:"数字键盘"},{name:"passwordInput",title:"密码输入框"},{name:"picker",title:"选择器"},{name:"radio",title:"单选框"},{name:"rate",title:"评分 "},{name:"search",title:"搜索"},{name:"slider",title:"滑块"},{name:"stepper",title:"步进器"},{name:"switch",title:"开关 "},{name:"uploader",title:"文件上传"},]},{title:"反馈组件",child:[{name:"actionSheet",title:"上拉菜单"},{name:"dialog",title:"弹出框"},{name:"dropdownMenu",title:"下拉菜单"},{name:"loading",title:"加载 "},{name:"notify",title:"消息通知"},{name:"overlay",title:"遮罩层"},{name:"pullRefresh",title:"下拉刷新"},{name:"swipeCell",title:"滑动单元格"},{name:"toast",title:"轻提示"},]},{title:"展示组件",child:[{name:"circle",title:"环形进度"},{name:"collapse",title:"折叠面板"},{name:"countDown",title:"倒计时"},{name:"divider",title:"分割线"},{name:"imagePreview",title:"图片预览"},{name:"lazyload",title:"图片懒加载"},{name:"list",title:"列表 "},{name:"noticeBar",title:"通知栏"},{name:"panel",title:"面板 "},{name:"progress",title:"进度条"},{name:"skeleton",title:"骨架屏"},{name:"steps",title:"步骤条"},{name:"sticky",title:"粘性布局"},{name:"swipe",title:"轮播 "},{name:"tag",title:"标记 "},]},{title:"导航组件",child:[{name:"grid",title:"宫格 "},{name:"indexBar",title:"索引栏"},{name:"navBar",title:"导航栏"},{name:"pagination",title:"分页 "},{name:"sidebar",title:"侧边导航"},{name:"tab",title:"标签页"},{name:"tabbar",title:"标签栏"},{name:"treeSelect",title:"分类选择"},]},{title:"业务组件",child:[{name:"addressEdit",title:"地址编辑"},{name:"addressList",title:"地址列表"},{name:"area",title:"省市区选择"},{name:"card",title:"商品卡片"},{name:"contactCard",title:"联系人"},{name:"couponList",title:"优惠券"},{name:"goodsAction",title:"商品导航"},{name:"submitBar",title:"提交订单"},{name:"sku",title:"商品规格"},]},{title:"废弃",child:[{name:"switchCell",title:"开关单元格"}]}]
    };
  },
  methods: {
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.demo-home {
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
    padding: 46px 20px 20px;
    background: #fff;
}
.demo-home__title {
    margin: 0 0 16px;
    font-size: 32px;
}
.demo-home__title img {
    width: 32px;
}
.demo-home__desc {
    margin: 0 0 40px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
}
.demo-home-nav__title {
    margin: 24px 0 8px 16px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
}
.demo-home-nav__block {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    margin: 0 0 12px;
    padding-left: 20px;
    color: #323233;
    font-weight: 500;
    font-size: 14px;
    line-height: 40px;
    background: #f7f8fa;
    border-radius: 99px;
    -webkit-transition: background 0.3s;
    transition: background 0.3s;
}
.demo-home-nav__icon {
    position: absolute;
    top: 50%;
    right: 16px;
    width: 16px;
    height: 16px;
    margin-top: -8px;
}
.demo-home-nav__block:hover {
    background: #eef0f4;
}
.demo-home-nav__block:active {
    background: #e4e8ee;
}
</style>
