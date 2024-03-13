import { createApp } from 'vue'
import App from './01-vue基本语法.vue'
import router from './router'

//关闭日志提醒
// Vue.config.productionTip = false

createApp(App).use(router).mount('#app')
