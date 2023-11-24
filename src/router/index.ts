import { createRouter, createWebHistory } from 'vue-router';
import CounterOptionsPage from '@/counter/pages/CounterOptionsPage.vue';
import CounterSetupPage from '@/counter/pages/CounterSetupPage.vue';
import ClientsLayout from '@/clients/layout/ClientsLayout.vue';
import ClientsPageVue from '@/clients/pages/ClientsPage.vue';
import ClientPageVue from '@/clients/pages/ClientPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter-options',
      component: CounterOptionsPage,
    },
    {
      path: '/counter-setup',
      name: 'counter-setup',
      component: CounterSetupPage,
    },
    {
      path: '/clients',
      name: 'clients',
      component: ClientsLayout,
      redirect: { name: 'list' },
      children: [
        { path: 'list', name: 'list', component: ClientsPageVue },
        { path: '/clients/:id', name: 'client-id', component: ClientPageVue },
      ]
    },
  ]
});

export default router;
