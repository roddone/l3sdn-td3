const routes = [
  {
    path: '/',
    component: () => import('components/TodoList.vue')
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
