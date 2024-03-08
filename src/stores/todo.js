// src/store/todo.js
export default function () {
  const state = {
    todos: []
  }

  const mutations = {
    ADD_TODO(state, todo) {
      state.todos.push(todo)
    },
    REMOVE_TODO(state, todoId) {
      state.todos = state.todos.filter((todo) => todo.id !== todoId)
    }
  }

  const actions = {
    addTodo({ commit }, todo) {
      commit('ADD_TODO', todo)
    },
    removeTodo({ commit }, todoId) {
      commit('REMOVE_TODO', todoId)
    }
  }

  return {
    namespaced: true,
    state,
    mutations,
    actions
  }
}
