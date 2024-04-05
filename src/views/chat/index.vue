<template>
	<div class="t-page">
		<van-nav-bar :title="routerQuery.query.model" left-text="返回" left-arrow @click-left="() => router.go(-1)" />
	</div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const routerQuery = ref({
	query: route.query as object,
})

const globalProperty = inject('global')
</script>

<style lang="scss" scoped>
.t-page {
	padding: 20px;
}
</style>
