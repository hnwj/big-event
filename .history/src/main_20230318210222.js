import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入基础的css文件
import '@/assets/global.less'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
app.use(ElementPlus)

