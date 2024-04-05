import type { App } from 'vue'
import { Toast, Notify, Dialog } from 'vant'

const configs = [Toast, Notify, Dialog]

export const injectApi = (app: App<Element>): void => {
	const globalApi: object = {}
	configs.forEach(its => {
		globalApi[`$${its.name.toLowerCase()}`] = its
	})
	app.provide('global', globalApi)
}
