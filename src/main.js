import { createApp } from 'vue'
import App from './03-elementplusStudy.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


//关闭日志提醒
// Vue.config.productionTip = false

createApp(App).use(router).use(ElementPlus).mount('#app')
