import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            crumbs: [
                { name: 'home', url: '/' }
            ]
        }
    },
    {
        path: '/projects',
        name: 'Projects',
        meta: {
            crumbs: [
                { name: 'home', url: '/' },
                { name: 'projects', url: '/projects' }
            ]
        },
        component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue')
    },
    {
        path: '/resume',
        name: 'Resume',
        meta: {
            crumbs: [
                { name: 'home', url: '/' },
                { name: 'resume', url: '/resume' }
            ]
        },
        component: () => import(/* webpackChunkName: "resume" */ '../views/Resume.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
