// 这是移动端控制台调试工具，需要调试就打开,不用就注释
import type { App } from 'vue'
import { getProcessEnv } from '@/global/env'
import VConsole from 'vconsole'
const vConsole = new VConsole()

export const useVconsole = (app: App<Element>): void => {
	if (getProcessEnv('IS_DEV')) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		app.use(vConsole)
	}
}
