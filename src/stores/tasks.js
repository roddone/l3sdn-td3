import { defineStore } from 'pinia'

export const useTasks = defineStore('tasks', {
  state: () => ({
    tasks: []
  }),
  actions: {
    addTask({ title, description, done }) {
      this.tasks.push({ title, description, done })
      this.saveTasksToLocalStorage()
    },
    removeTask(index) {
      this.tasks.splice(index, 1)
      this.saveTasksToLocalStorage()
    },
    saveTasksToLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    loadTasks() {
      const tasks = localStorage.getItem('tasks')
      if (tasks) {
        this.tasks = JSON.parse(tasks)
      }
    },
    toggleDone(index) {
      this.tasks[index].done = !this.tasks[index].done
      this.saveTasksToLocalStorage()
    },
    updateTask(index, { title, description, done }) {
      this.tasks[index] = { title, description, done }
      console.log('works')
      this.saveTasksToLocalStorage()
    }
  }
})
