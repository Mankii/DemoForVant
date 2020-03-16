<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {}
	};
</script>

<style>
	html{
		font-size: 16px;
	}
body {
  min-width: 1100px;
  margin: 0;
  overflow-x: auto;
  color: #323233;
  font-size: 16px;
  font-family: PingFang SC, 'Helvetica Neue', Arial, sans-serif;
  background-color: #f7f8fa;
  -webkit-font-smoothing: antialiased;
}
p {
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-size: inherit;
}
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
.van-doc-row {
  width: 100%;
}
@media (min-width: 1680px) {
.van-doc-row {
    width: 1680px;
    margin: 0 auto;
}
}
body {
  min-width: 100vw;
}
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
	.p-10 {
		padding: 10px;
	}

	.pl-20 {
		padding-left: 20px !important;
	}
	.mr-10{
		margin-right: 10px;
	}
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

	/* 内页 */
	.demo-page {
		padding-top: 56px;
	}

	.demo-nav {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
		width: 100%;
		height: 56px;
		line-height: 56px;
		text-align: center;
		background-color: #fff;
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
	}

	.demo-nav__title {
		font-weight: 500;
		font-size: 17px;
		text-transform: capitalize;
	}

	.demo-nav__back {
		position: absolute;
		top: 16px;
		left: 16px;
		width: 24px;
		height: 24px;
		cursor: pointer;
	}

	.van-doc-demo-section {
		box-sizing: border-box;
		min-height: calc(100vh - 56px);
		/* padding-bottom: 20px; */
		text-align: left;
	}

	.demo-page .van-button--small,
	.demo-page .van-button--normal:not(:last-child) {
		margin-right: 16px;
	}

	.demo-button {
		background: #fff;
	}

	.demo-button .van-doc-demo-block {
		padding: 0 16px;
	}

	.van-doc-demo-block__title {
		margin: 0;
		padding: 32px 16px 16px;
		color: rgba(69, 90, 100, 0.6);
		font-weight: normal;
		font-size: 14px;
		line-height: 16px;
	}

	.demo-button .van-doc-demo-block__title {
		padding-left: 0;
	}

	.van-doc-demo-block:first-of-type .van-doc-demo-block__title {
		padding-top: 20px;
	}

	.demo-button-row {
		margin-bottom: 12px;
	}

	.demo-grey .demo-button {
		background: #eee;
	}

	.demo-grey .demo-button .van-doc-demo-block {
		padding: 0
	}

	.demo-grey .demo-button .van-doc-demo-block__title {
		padding: 20px;
	}
</style>
