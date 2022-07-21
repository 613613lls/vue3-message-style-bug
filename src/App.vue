<template>
	<el-config-provider :locale="zhCn">
		<router-view v-slot="{ Component }">
			<component :is="Component"></component>
		</router-view>
	</el-config-provider>
</template>
<script setup>
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
</script>
<style lang="less">


html,
body {
	height: 100%;
	background: #f6f6f6;
}
#app {
	height: 100%;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>
