
const routes = [
  {
    path: '/',
    component: () => import('src/components/TodoList.vue'),
  },
  {
    path: '/form',
    component: () => import('src/components/TodoForm.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
