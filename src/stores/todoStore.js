import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todos', {
  state: () => ({
    todoList: [
      {
        id: 1,
        description: 'Learn Vue',
        state: 'Done',
        date: '2022-01-01',
      },
      {
        id: 2,
        description: 'Learn Quasar',
        state: 'Done',
        date: '2022-01-01',
      },
      {
        id: 3,
        description: 'Learn Js',
        state: 'Done',
        date: '2022-01-01',
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
        console.log('huuuuh')
        this.todoList = this.todoList.filter(todo => todo.id !== task.id)
      }
    },
    changeTodoStatus(list, status){
      for (let todo of list) todo.state = status 
    }
  }
})
