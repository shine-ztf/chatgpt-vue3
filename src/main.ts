import 'virtual:windi.css' // 引入便捷css库
import '@/polyfill/polyfill' // 安装web兼容低版本浏览器插件

// 引入全局样式
import '@/assets/scss/index.scss'

// 引入阿里云字体图标css
import '@/assets/iconfont/iconfont.css'
import '@/assets/iconfont/iconfont.js'

// 引入阿里巴巴普惠体 2.0字体
import '@/assets/iconfont/font/font.css'

import { createApp } from 'vue'
import App from '@/App.vue'

import { setupStore } from '@/store' // 封装的模块化pinia store
import { setupRouter } from '@/router' // 封装的路由
import { useVconsole } from '@/utils/vconsole'
import { injectApi } from '@/utils/global' // 全局模块
import 'vant/es/toast/style'
import 'vant/es/dialog/style'

const app = createApp(App)
injectApi(app) // 注册一些全局模块
setupStore(app) // 注册全局仓库
setupRouter(app) // 注册路由
useVconsole(app) // 是否启用Vconsole，根据环境决定

app.mount('#app')
