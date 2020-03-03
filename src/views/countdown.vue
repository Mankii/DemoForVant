<template>
	<page>
		<d-block title="基础用法">
			<van-count-down :time="time" />
		</d-block>
		<d-block title="自定义格式">
			<van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
		</d-block>
		<d-block title="毫秒级渲染">
			<van-count-down millisecond :time="time" format="HH:mm:ss:SS" />
		</d-block>
		<d-block title="自定义样式">
			<van-count-down :time="time">
				<template v-slot="timeData">
					<span class="item">{{ timeData.hours }}</span>
					<span class="item">{{ timeData.minutes }}</span>
					<span class="item">{{ timeData.seconds }}</span>
				</template>
			</van-count-down>
		</d-block>
		<d-block title="手动控制">
			<van-count-down ref="countDown" millisecond :time="3000" :auto-start="false" format="ss:SSS" @finish="finish" />
			<van-grid clickable>
				<van-grid-item text="开始" icon="play-circle-o" @click="start" />
				<van-grid-item text="暂停" icon="pause-circle-o" @click="pause" />
				<van-grid-item text="重置" icon="replay" @click="reset" />
			</van-grid>
		</d-block>
	</page>
</template>

<script>
	export default {
		data() {
			return {
				time: 30 * 60 * 60 * 1000
			};
		},
		methods: {
			start() {
				this.$refs.countDown.start();
			},
			pause() {
				this.$refs.countDown.pause();
			},
			reset() {
				this.$refs.countDown.reset();
			},
			finish() {
				this.$toast('倒计时结束');
			}
		}
	}
</script>

<style>
	.item {
		display: inline-block;
		width: 22px;
		margin-right: 5px;
		color: #fff;
		font-size: 12px;
		text-align: center;
		background-color: #1989fa;
	}
</style>
