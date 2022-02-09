export default {
  path: '/login',
  name: 'login',
  component: () => import('@/views/sys/login/index.vue'),
  meta: {
    title: '',
    requiresAuth: false,
  },
};
