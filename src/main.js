import { createApp } from 'vue'
import App from './App.vue'
// 全局引用
import ElementPlus from 'element-plus'
// 引用所有样式
import 'element-plus/dist/index.css'
import router from '@/router/index.js'
import axios from "axios";
axios.defaults.baseURL=`${process.env.VUE_APP_API_URL}`;

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
