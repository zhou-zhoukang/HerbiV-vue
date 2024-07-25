import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from "@/components/views/MainPage.vue"
import HomePage from "@/components/views/HomePage.vue"
import ResultPage from "@/components/views/ResultPage.vue";
import HelpPage from "@/components/views/HelpPage.vue";
import DownloadPage from "@/components/views/DownloadPage.vue";
import ContactPage from "@/components/views/ContactPage.vue";

const routes = [
    {
        path: "/",
        component: MainPage,
        redirect: '/home',
        children: [
            { path: 'home', meta:{keepAlive: true}, component: HomePage },
            { path: 'result', component: ResultPage },
            { path: 'download', component: DownloadPage },
            { path: 'help', component: HelpPage},
            { path: 'contact', component: ContactPage}
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
