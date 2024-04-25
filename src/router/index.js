import { createRouter, createWebHashHistory } from 'vue-router'
import Main from "@/views/MainPage.vue"
import Home from "@/views/HomePage.vue"
import Detail from "@/views/Detail.vue";

const routes = [
    {
        path: "/",
        component: Main,
        redirect: '/home',
        children: [
            { path: 'home', component: Home },
            { path: 'search', component: Home },
            { path: 'download', component: Home },
            { path: 'detail', component: Detail}
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router