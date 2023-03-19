import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button } from 'element-ui';
// 导入基础的css文件
import '@/assets/global.less'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
app.use(Button)

