<template>
  <div class="flex flex-col space-y-2">
    <div class="flex">
      <q-input v-model="newTodo" filled placeholder="Ajouter une nouvelle tâche" class="flex-grow" />
      <q-btn icon="add" class="q-ml-md" @click="addTodo" />
    </div>
    <div>
      <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" @remove="removeTodo(index)" @toggle="toggleTodoCompletion(index)" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TodoItem from './TodoItem.vue'

const todos = ref([])
const newTodo = ref('')

function addTodo() {
  if (newTodo.value.trim()) {
    todos.value.push({ text: newTodo.value, completed: false })
    newTodo.value = ''
  }
}

function removeTodo(index) {
  todos.value.splice(index, 1)
}
function updateTodo(index, newTodo) {
  todos.value[index] = newTodo
}
function toggleTodoCompletion(index) {
  const todo = todos.value[index]
  todo.completed = !todo.completed
}
</script>
