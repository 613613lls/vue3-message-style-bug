<template>
	<div class="login-page">
		<el-button type="primary">按钮</el-button>
		<el-input :value="214124323"></el-input>

		<el-checkbox v-model="checked1" label="Option 1" size="large" />
		<el-checkbox v-model="checked2" label="Option 2" size="large" />

		<el-cascader />
		<el-pagination layout="prev, pager, next" :total="50"></el-pagination>
		<el-time-select
			value="08:30"
			start="08:30"
			step="00:15"
			end="18:30"
			placeholder="Select time"
		/>

		 <el-tag>Tag 1</el-tag>
	</div>
</template>

<script setup>
// ElMessage.success("r453534534534534")

ElMessage;
</script>

<style lang="scss" scoped></style>
