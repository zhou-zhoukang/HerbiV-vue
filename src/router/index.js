import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from "@/components/views/MainPage.vue"
import HomePage from "@/components/views/HomePage.vue"
import ResultPage from "@/components/views/ResultPage.vue";
import HelpPage from "@/components/views/HelpPage.vue";

const routes = [
    {
        path: "/",
        component: MainPage,
        redirect: '/home',
        children: [
            { path: 'home', component: HomePage },
            { path: 'result', component: ResultPage },
            { path: 'download', component: HomePage },
            { path: 'help', component: HelpPage}
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
