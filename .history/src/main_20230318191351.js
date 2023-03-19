import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Select } from 'element-ui';
// 导入基础的css文件
import '@/assets/global.less'
Vue.use(Button)
Vue.use(Select)

createApp(App).use(store).use(router).mount('#app')
