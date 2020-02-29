<template>
	<page class="demo-grey">
		<d-block title="基础用法">
			<van-cell :title="date||'选择单个时间'" is-link @click="showModel"/>
			<van-calendar v-model="show" @confirm="onConfirm"/>
			
			<van-cell :title="date2||'选择时间区间'" is-link @click="showModel2"/>
			<van-calendar v-model="show2" type="range" @confirm="onConfirm2"/>
		</d-block>
		<d-block title="快捷选择">
			<van-cell :title="date3||'选择单个时间'" is-link @click="showModel3"/>
			<van-calendar v-model="show3" :show-confirm="false" @confirm="onConfirm3"/>
			
			<van-cell :title="date4||'选择时间区间'" is-link @click="showModel4"/>
			<van-calendar v-model="show4" :show-confirm="false" type="range" @confirm="onConfirm4"/>
		</d-block>
		<d-block title="自定义日历">
			<van-cell :title="date5||'自定义日期文案'" is-link @click="showModel5"/>
			<van-calendar
				v-model="show5"
				type="range"
				:formatter="formatter"
				:show-confirm="false"
			/>
		</d-block>
		<d-block title="平铺展示">
			<van-calendar
				:formatter="formatter"
				:show-confirm="false"
				:poppable="false"
				:style="{ height: '500px' }"
			/>
		</d-block>
	</page>
</template>

<script>
export default {
	data() {
		return {
			date: '',
			show: false,
			
			date2: '',
			show2: false,
			date3: '',
			show3: false,
			date4: '',
			show4: false,
			
			date5: '',
			show5: false,
		};
	},
	methods: {
		formatDate(date) {
			return `${date.getMonth() + 1}/${date.getDate()}`;
		},
		showModel(){
			this.show = true
		},
		onConfirm(date) {
			this.show = false;
			this.date = this.formatDate(date);
		},
		showModel2(){
			this.show2 = true
		},
		onConfirm2(date2) {
			const [start, end] = date2;
			this.show2 = false;
			this.date2 = `${this.formatDate(start)} - ${this.formatDate(end)}`;
		},
		showModel3(){
			this.show3 = true
		},
		onConfirm3(date3) {
			this.show3 = false;
			this.date3 = this.formatDate(date3);
		},
		showModel4(){
			this.show4 = true
		},
		onConfirm4(date4) {
			const [start, end] = date4;
			this.show4 = false;
			this.date4 = `${this.formatDate(start)} - ${this.formatDate(end)}`;
		},
		// 自定义日期文案
		formatter(day) {
		const month = day.date.getMonth() + 1;
		const date = day.date.getDate();
	
		if (month === 5) {
			if (date === 1) {
			day.topInfo = '劳动节';
			} else if (date === 4) {
			day.topInfo = '五四青年节';
			} else if (date === 11) {
			day.text = '今天';
			}
		}
	
		if (day.type === 'start') {
			day.bottomInfo = '入住';
		} else if (day.type === 'end') {
			day.bottomInfo = '离店';
		}
	
		return day;
		},
		showModel5(){
			this.show5 = true
		},
	}
};
</script>

<style>
</style>
