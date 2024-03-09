// list.js
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    tasks: []
  }),
  actions: {
    addTask(task) {
      this.tasks.push(task)
    },

    deleteTask(index) {
      this.tasks.splice(index, 1)
    }
  }
})
