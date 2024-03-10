import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//关闭日志提醒
// Vue.config.productionTip = false

createApp(App).use(router).mount('#app')
