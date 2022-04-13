import { createRouter, createWebHistory } from 'vue-router'
import AlertsRoutes from './app/alerts/alerts.routing';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			component: () => import('./app/home/home.vue'),
		},
		AlertsRoutes
	]
});

export default router;
