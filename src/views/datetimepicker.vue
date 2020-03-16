<template>
	<page class="demo-grey">
		<d-block title="选择完整时间">
			<van-datetime-picker
				v-model="currentDate"
				type="datetime"
				:min-date="minDate"
				:max-date="maxDate"
			/>
		</d-block>
		<d-block title="选择日期（年月日）">
			<van-datetime-picker
				v-model="currentDate"
				type="date"
				:min-date="minDate"
				:max-date="maxDate"
			/>
		</d-block>
		<d-block title="选择日期（年月）">
			<van-datetime-picker
				v-model="currentDate"
				type="year-month"
				:min-date="minDate"
				:max-date="maxDate"
				:formatter="formatter"
			/>
		</d-block>
		<d-block title="选择时间">
			<van-datetime-picker
				v-model="currentTime"
				type="time"
				:min-hour="10"
				:max-hour="20"
			/>
		</d-block>
		<d-block title="选项过滤器(自定义时间间隔)">
			<van-datetime-picker
				v-model="currentTime"
				type="time"
				:filter="filter"
			/>
		</d-block>
	</page>
</template>

<script>
	export default{
		data() {
			return {
				minDate: new Date(2020, 0, 1),
				maxDate: new Date(2025, 10, 1),
				currentDate: new Date(),
				
				currentTime: '12:00'
			}
		},
		methods:{
			formatter(type, val) {
				if (type === 'year') {
					return `${val}年`;
				} else if (type === 'month') {
					return `${val}月`
				}
				return val;
			},
			filter(type, options) {
				if (type === 'minute') {
					return options.filter(option => option % 5 === 0);
				}

				return options;
			}
		}
	}
</script>

<style>
</style>
