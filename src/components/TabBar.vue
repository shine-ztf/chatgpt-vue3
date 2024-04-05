<template>
	<van-tabbar v-model="active" fixed route safe-area-inset-bottom>
		<van-tabbar-item v-for="(item, index) in tabBar" :key="index" :to="item.to" :name="item.to.name" :icon="item.icon" :badge="item.badge">{{ item.title }}</van-tabbar-item>
	</van-tabbar>
</template>

<script lang="ts">
export default {
	name: 'TabBar',
}
</script>
<script setup lang="ts">
import { ref } from 'vue'

const tabBar = [
	{
		title: '首页',
		to: {
			name: 'home',
		},
		icon: 'home-o',
	},
	{
		title: '我的',
		to: {
			name: 'user',
		},
		icon: 'user-o',
	},
]

const active = ref(0)
</script>

<style lang="scss" scoped></style>
