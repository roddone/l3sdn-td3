import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todos', {
  state: () => ({
    todoList: [
      {
        id: 1,
        description: 'Learn Vue',
        state: 'Terminé',
        date: '2022-01-01',
        selected: false // Nouvel état pour stocker si la tâche est sélectionnée
      }
    ],
    lastId: 1,
  }),
  getters: {
    getTodoList: state => state.todoList,
    getLastId: state => state.lastId,
    getSelectedTodos: state => state.todoList.filter(todo => todo.selected) // Getter pour obtenir les tâches sélectionnées
  },
  actions: {
    addTodo(todo) {
      todo.id = ++this.lastId
      todo.selected = false // Assurez-vous d'initialiser la sélection à false lors de l'ajout d'une nouvelle tâche
      this.todoList.push(todo)
    },
    deleteTodos(list) {
      for (let todo in list) {
        this.todoList.splice(this.todoList.indexOf(list[todo]), 1)
      }
    },
    changeTodoStatus(todoId, newStatus) {
      const todo = this.todoList.find(todo => todo.id === todoId)
      if (todo) {
        todo.state = newStatus
      }
    },
    toggleTodoSelection(todoId) {
      const todo = this.todoList.find(todo => todo.id === todoId)
      if (todo) {
        todo.selected = !todo.selected // Inverse l'état de sélection de la tâche
      }
    },
    selectAllTodos() {
      this.todoList.forEach(todo => todo.selected = true) // Sélectionne toutes les tâches
    },
    deselectAllTodos() {
      this.todoList.forEach(todo => todo.selected = false) // Désélectionne toutes les tâches
    }
  },
})
