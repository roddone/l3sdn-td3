<template>
  <div>
    <!-- Div fixe pour le formulaire -->
    <div
      class="fixed top-0 left-0 right-0 z-index-10 bg-white"
      style="padding: 16px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2)"
    >
      <div class="q-gutter-md flex justify-center">
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
    </div>
    <div class="q-mt-xl" style="padding-top: 100px">
      <div v-for="(todo, index) in store.todos" :key="index" class="q-pa-md">
        <TodoItem
          :todo="todo"
          :index="index"
          @remove="store.removeTodo(index)"
          @toggle="store.toggleTodoCompletion(index)"
          @update:todo="store.updateTodo(index, $event)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TodoItem from 'components/TodoItem.vue'
import { useTodosStore } from 'stores/todos'

const store = useTodosStore()
const newTodoText = ref('')
const newTodoDueDate = ref('')

function addTodo() {
  if (newTodoText.value.trim()) {
    store.addTodo({
      text: newTodoText.value,
      completed: false,
      created: new Date().toISOString().substring(0, 10),
      due: newTodoDueDate.value || null
    })
    newTodoText.value = ''
    newTodoDueDate.value = ''
  }
}

const todos = store.todos
</script>
