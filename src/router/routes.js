
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }]
  },

  {
    path: '/view/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ViewPage.vue') }]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
