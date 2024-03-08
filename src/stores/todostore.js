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
    AddTodo(todo) {
      this.Todos.push(todo)
    },
    RemoveTodo(id) {
      this.Todos = this.Todos.filter((todo) => todo.id !== id)
    },
    UpdateTodo(id, name, descr, date, categorie) {
      this.Todos.map((todo) => {
        if (todo.id === id) {
          todo.name = name
          todo.descr = descr
          todo.date = date
          todo.categorie = categorie
        }
      })
    },
    getTodobyCategorie(categorie) {
      return this.Todos.filter((todo) => todo.categorie === categorie)
    },
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
