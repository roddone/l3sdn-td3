import { defineStore } from 'pinia'

export const useTasks = defineStore('tasks', {
  state: () => ({
    tasks: []
  }),
  actions: {
    addTask({ title, description, date, done }) {
      this.tasks.push({ title, description, date, done })
      console.log(this.tasks)
      this.saveTasksToLocalStorage()
    },
    removeTask(task) {
      const index = this.tasks.indexOf(task)
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
    updateTask(index, { title, description, date, done }) {
      this.tasks[index] = { title, description, date, done }
      this.saveTasksToLocalStorage()
    }
  }
})
