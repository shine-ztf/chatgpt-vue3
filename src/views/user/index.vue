<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {})
</script>

<!-- about -->
<template>
	<div class="t-page">
		<van-button type="danger" round block @click="() => {}">{{ '退出登录' }}</van-button>
	</div>
</template>

<style lang="scss" scoped>
.t-page {
	padding: 20px;
}
</style>
