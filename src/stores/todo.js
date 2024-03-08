import { defineStore } from 'pinia'

export const useTodosStorage = defineStore('todos', {
  state: () => ({
    todos: JSON.parse(localStorage.getItem('todos')) || [
      { id: 1, name: 'revise lessons', category: 'Study', status: 'done' },
      { id: 2, name: 'go workout', category: 'Sport', status: 'notdone' },
      { id: 3, name: 'make portfolio', category: 'Personal', status: 'done' },
      { id: 4, name: 'vue project', category: 'Study', status: 'notdone' }
    ]
  }),
  actions: {
    getTodos() {
      return this.todos
    },
    addTodo(todo) {
      todo.id = this.todos.length > 0 ? Math.max(...this.todos.map((t) => t.id)) + 1 : 1
      this.todos.push(todo)
      this.updateLocalStorage()
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter((t) => t.id !== todoId)
      this.updateLocalStorage()
    },
    updateTodo(updatedTodo) {
      const index = this.todos.findIndex((t) => t.id === updatedTodo.id)
      if (index !== -1) {
        this.todos[index] = updatedTodo
        this.updateLocalStorage()
      }
    },
    updateLocalStorage() {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  }
})
