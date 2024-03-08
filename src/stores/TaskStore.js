import { defineStore } from 'pinia'

export const useTasksStore = defineStore('TasksStore', {
    state: () => ({
        tasks: []
    }),
    getters: {
        tasksSize() {
        return this.tasks.length
        }
    },
    actions: {
        addTask(task) {
            this.tasks.push(task)
        },
        removeTask(task) {
            const index = this.tasks.indexOf(task)
            this.tasks.splice(index, 1)
        },
        editTask(oldTask, newTask) {
            const index = this.tasks.indexOf(oldTask)
            this.tasks.splice(index, 1, newTask)
        }
    }
})