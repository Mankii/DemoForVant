<template>
	<page class="demo-grey">
		<d-block title="文字省略">
			<d-row class="line-w">
				<!-- 最多显示一行 -->
				<div class="van-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>
			</d-row>
			<d-row class="line-w">
				<!-- 最多显示两行 -->
				<div class="van-multi-ellipsis--l2">这是一段最多显示两行的文字，多余的内容会被省略这是一段最多显示两行的文字，多余的内容会被省略</div>
			</d-row>
			<d-row class="line-w">
				<!-- 最多显示三行 -->
				<div class="van-multi-ellipsis--l3">这是一段最多显示三行的文字，多余的内容会被省略这是一段最多显示两行的文字，多余的内容会被省略这是一段最多显示两行的文字，多余的内容会被省略这是一段最多显示两行的文字，多余的内容会被省略</div>
			</d-row>
		</d-block>
		<d-block title="1px 边框">
			<div class="line-w">
				<!-- 上边框 -->
				<div class="van-hairline--top"></div>
			</div>
			<div class="line-w">
				<!-- 下边框 -->
				<div class="van-hairline--bottom"></div>
			</div>
			<div class="line-w">
				<!-- 左边框 -->
				<div class="van-hairline--left"></div>
			</div>
			<div class="line-w">
				<!-- 右边框 -->
				<div class="van-hairline--right"></div>
			</div>
			<div class="line-w">
				<!-- 上下边框 -->
				<div class="van-hairline--top-bottom"></div>
			</div>
			<div class="line-w">
				<!-- 全边框 -->
				<div class="van-hairline--surround"></div>
			</div>
		</d-block>
		<d-block title="动画">
			<van-cell is-link @click="showAnimate(1)">Fade</van-cell>
			<van-cell is-link @click="showAnimate(2)">Slide Up</van-cell>
			<van-cell is-link @click="showAnimate(3)">Slide Down</van-cell>
			<van-cell is-link @click="showAnimate(4)">Slide Left</van-cell>
			<van-cell is-link @click="showAnimate(5)">Slide Right</van-cell>
			<!-- 淡入 -->
			<transition name="van-fade">
				<div class="b" v-show="visible===1">Fade</div>
			</transition>

			<!-- 上滑进入 -->
			<transition name="van-slide-up">
				<div class="b" v-show="visible===2">Slide Up</div>
			</transition>

			<!-- 下滑进入 -->
			<transition name="van-slide-down">
				<div class="b" v-show="visible===3">Slide Down</div>
			</transition>

			<!-- 左滑进入 -->
			<transition name="van-slide-left">
				<div class="b" v-show="visible===4">Slide Left</div>
			</transition>

			<!-- 右滑进入 -->
			<transition name="van-slide-right">
				<div class="b" v-show="visible===5">Slide Right</div>
			</transition>
		</d-block>
	</page>
</template>

<script>
	export default{
		data(){
			return {
				visible: false
			}
		},
		methods:{
			showAnimate(index){
				this.visible = index;
				setTimeout(()=>{
					this.visible = false;
				},1000)
			}
		}
	}
</script>

<style>
	.b{
		position: fixed;
		top: 50%;
		left: 50%;
		margin-top: -50px;
		margin-left: -50px;
		display: block;
		width: 100px;
		height: 100px;
		background-color: #39A9ED;
		margin: 20px auto;
		text-align: center;
		padding: 20px;
	}
	[class*=van-hairline-]{
		width: 100%;
		height: 20px;
	}
	.line-w{
		padding: 10px;
		background-color: #fff;
		margin-bottom: 10px;
	}
</style>
