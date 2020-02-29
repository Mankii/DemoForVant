<template>
	<page class="demo-grey">
		<d-block title="基础用法">
			<van-cell is-link @click="showPopup">展示弹出层</van-cell>
			<van-popup
				v-model="show"
				position="top"
				close-icon="close"
				closeable
				close-icon-position="top-right"
				round
				:style="{ height: '30%' }"
			>内容</van-popup>
		</d-block>
	</page>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },

  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
</script>

<style>
</style>
