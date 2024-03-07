const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // Route par défaut vers TodoPage.vue
      { path: '', component: () => import('pages/TodoPage.vue') }
    ]
  },
  // ... autres routes
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
