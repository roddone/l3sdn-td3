import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todos', {
  state: () => ({
    todoList: [
      {
        id: 1,
        description: 'Learn Vue',
        state: 'Done',
        date: '2022-01-01'
      },
      {
        id: 2,
        description: 'Learn Quasar',
        state: 'Done',
        date: '2022-01-01'
      },
      {
        id: 3,
        description: 'Learn Js',
        state: 'Done',
        date: '2022-01-01'
      }
    ]
  }),
  actions: {
    getTodoList() {
      return this.todoList
    },
    addTodo(todo) {
      this.todoList.push(todo)
    },
    deleteTodo(id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id)
    },
    getLastId() {
      return this.todoList[this.todoList.length - 1]['id']
    }
  }
})
