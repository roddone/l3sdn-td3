import { defineStore } from 'pinia'

export const useTodoStore = defineStore('Todos', {
  state: () => ({
    Todos: []
  }),
  getters: {
    GetTodos() {
      return this.Todos
    },
    GetTodoById(id) {
      return this.Todos.find((todo) => todo.id === id)
    }
  },
  actions: {
    AddTodo() {
      this.Todos.push()
    },
    UpdateTodo(id, name, descr, date, categorie) {},
    CheckTodo(id) {
      this.Todos.map((todo) => {
        if (todo.id === id) {
          if (todo.checked) {
            todo.checked = false
          } else {
            todo.checked = true
          }
        }
      })
    }
  }
})
