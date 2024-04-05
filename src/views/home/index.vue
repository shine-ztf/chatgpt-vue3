<template>
	<div class="t-page">
		<h1 class="t-title">
			<SvgIcon name="logo" size="1rem" color="var(--van-primary-color)" />
			<span>chatgpt-vue3</span>
		</h1>
		<div class="t-tip">{{ '智能AI聊天助手' }}</div>
		<div class="t-swipe">
			<van-swipe style="height: 200px" class="t-swipe-com" :autoplay="3000" lazy-render>
				<van-swipe-item v-for="image in images" :key="image">
					<img :src="image" alt="" />
				</van-swipe-item>
			</van-swipe>
		</div>
		<van-button type="primary" round block @click="handleEnterChat">
			{{ '进入聊天' }}
		</van-button>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const images = ref(['https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg', 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg'])

function handleEnterChat() {
	router.push({
		path: '/chat',
		query: {
			model: 'gpt-3.5-turbo',
		},
	})
}
</script>

<style lang="scss" scoped>
.t-page {
	padding: 20px;
	.t-title {
		font-size: 22px;
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 10px;
		span {
			padding-left: 8px;
		}
	}
	.t-tip {
		margin: 0 0 40px;
		color: var(--van-text-color-2);
		font-size: 14px;
		text-align: center;
	}
	.t-swipe {
		margin: 0 0 40px;
		.t-swipe-com .van-swipe-item {
			color: #fff;
			font-size: 20px;
			line-height: 150px;
			text-align: center;
			background-color: #39a9ed;
		}
	}

	.t-list {
		&-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 40px;
			border-radius: 20px;
			background-color: var(--common-background-color);
			padding: 0 20px;
			cursor: pointer;
			margin-bottom: 14px;
		}
	}
}
</style>
