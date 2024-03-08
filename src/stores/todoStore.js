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
    deleteTodos(list) {
      for (let task in list){
        this.todoList.splice(this.todoList.indexOf(list[task]), 1)
      }
    },
    changeTodoStatus(list, status){
      for (let todo of list) todo.state = status 
    },
    getLastId() {
      if (this.todoList.length != 0){
        return this.todoList[this.todoList.length - 1]['id']
      } else {
        return 0
      }
    }
  }
})