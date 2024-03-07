import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: [],
  }),
  actions: {
    addTodo(todo) {
      this.todos.push(todo)
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    },
    toggleTodoCompletion(index) {
      const todo = this.todos[index]
      todo.completed = !todo.completed
    },
    updateTodo(index, updatedTodo) {
      this.todos[index] = updatedTodo
    }
  },
})
