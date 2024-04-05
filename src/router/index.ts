import type { App } from 'vue'
import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 主要tabbar
export const layoutRoutes: Array<RouteRecordRaw> = [
	{
		path: '/home',
		name: 'home',
		meta: {
			title: 'home',
			keepAlive: true,
		},
		component: () => import('@/views/home/index.vue'),
	},
	{
		path: '/user',
		name: 'user',
		meta: {
			title: 'user',
		},
		component: () => import('@/views/user/index.vue'),
	},
]

export const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: () => import('@/layout/index.vue'),
		redirect: '/home',
		// 需要layout的页面
		children: layoutRoutes,
	},

	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login/index.vue'),
	},
	{
		path: '/chat',
		name: 'chat',
		component: () => import('@/views/chat/index.vue'),
	},
	{
		path: '/account',
		name: 'account',
		component: () => import('@/views/account.vue'),
	},

	// 替代vue2中的'*'通配符路径
	{ path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
	scrollBehavior: () => ({ left: 0, top: 0 }),
	history: createWebHashHistory(),
	routes,
})

router.beforeEach((_to, _from, next) => {
	next()
})

export function setupRouter(app: App<Element>) {
	app.use(router)
}
