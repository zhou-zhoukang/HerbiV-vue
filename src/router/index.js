import { createRouter, createWebHashHistory } from 'vue-router'
import Main from "@/views/MainPage.vue"
import Home from "@/views/HomePage.vue"
import RealDetail from "@/views/RealDetail.vue";

const routes = [
    {
        path: "/",
        component: Main,
        redirect: '/home',
        children: [
            { path: 'home', component: Home },
            { path: 'search', component: Home },
            { path: 'download', component: Home },
            { path: 'detail', component: RealDetail}
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router