<template>
  <div class="flex flex-col space-y-2">
    <div class="flex">
      <q-input
        v-model="newTodoText"
        filled
        placeholder="Ajouter une nouvelle tâche"
        class="flex-grow"
      />
      <q-input
        v-model="newTodoDueDate"
        filled
        type="date"
        placeholder="Date limite (optionnel)"
        class="q-ml-md"
      />
      <q-btn icon="add" class="q-ml-md" @click="addTodo" />
    </div>
    <div>
      <TodoItem
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        @remove="removeTodo(index)"
        @toggle="toggleTodoCompletion(index)"
        @update:todo="updateTodo(index, $event)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TodoItem from './TodoItem.vue'

const todos = ref([])
const newTodoText = ref('')
const newTodoDueDate = ref('')

function addTodo() {
  if (newTodoText.value.trim()) {
    todos.value.push({
      text: newTodoText.value,
      completed: false,
      created: new Date().toISOString().substring(0, 10),
      due: newTodoDueDate.value || null
    })
    newTodoText.value = ''
    newTodoDueDate.value = ''
  }
}

function removeTodo(index) {
  todos.value.splice(index, 1)
}

function toggleTodoCompletion(index) {
  const todo = todos.value[index]
  todo.completed = !todo.completed
}

function updateTodo(index, updatedTodo) {
  todos.value[index] = updatedTodo
}
</script>
