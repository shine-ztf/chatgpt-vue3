import type { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 实例化pinia
export const pinia = createPinia()
// 使用持久化存储插件
pinia.use(piniaPluginPersistedstate)

export const setupStore = (app: App<Element>): void => {
	app.use(pinia)
}

// 统一导出modules下的所有store
export * from './modules'
