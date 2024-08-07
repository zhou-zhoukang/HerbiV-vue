import { createApp } from 'vue'
import App from './App.vue'
// 全局引用
import ElementPlus from 'element-plus'
// 引用所有样式
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import "@/assets/fonts/font.css";
import "@/assets/css/common.css"
import router from '@/router/index.js'
import axios from "axios";
axios.defaults.baseURL=`${process.env.VUE_APP_API_URL}`;
// axios 可以自定义拦截某些请求
// axios.interceptors.response.use(res => {
//   if (res.status === 404) {
//     console.log("拦截 404 错误")
//     return Promise.reject(res)
//   } else {
//     return Promise.resolve(res);
//   }
// })

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')

// ======== 神秘代码解决 el-table 的 ResizeObserver loop completed with undelivered notifications. 问题
const debounce = (fn, delay) => {
  let timer
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

const _ResizeObserver = window.ResizeObserver;
window.ResizeObserver = class ResizeObserver extends _ResizeObserver{
  constructor(callback) {
    callback = debounce(callback, 200);
    super(callback);
  }
}
