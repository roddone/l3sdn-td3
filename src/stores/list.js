// list.js
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    tasks: [] // Initialiser une liste vide pour stocker les tâches
  }),
  actions: {
    addTask(task) {
      this.tasks.push(task) // Ajouter une nouvelle tâche à la liste
    }
  }
})
