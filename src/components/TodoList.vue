<template>
  <div class="todo-list">
    <div class="q-gutter-md">
      <h2>Todo List</h2>
      <q-btn
        label="Add Todo"
        :color="formVisible ? 'primary' : 'secondary'"
        :class="formVisible ? '' : 'button-before-click'"
        class="q-mb-md"
        @click="openForm"
      />
      <div v-for="category in categories" :key="category" class="column">
        <h3>{{ category }}</h3>
        <q-card v-for="todo in todosByCategory(category)" :key="todo.id" class="todo-card">
          <q-card-section>
            <h4>{{ todo.name }}</h4>
            <p>Date: {{ todo.date }}</p>
            <p>Description: {{ todo.descr }}</p>
          </q-card-section>
          <q-card-section>
            <q-checkbox v-model="todo.checked" label="Checked" @input="checkTodo(todo)" />
          </q-card-section>
          <q-card-actions>
            <q-btn label="Remove" color="negative" @click="removeTodo(todo.id)" />
            <q-btn label="Update" color="primary" @click="openUpdateForm(todo)" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <q-dialog v-model="formVisible">
      <q-card class="todo-form">
        <q-card-section>
          <h2>Add Todo</h2>
          <todo-form />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="updateFormVisible">
      <q-card class="todo-form">
        <q-card-section>
          <h2>Update Todo</h2>
          <todo-form :todo="selectedTodo" @submit="updateTodo" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { useTodoStore } from '../stores/todostore.js'
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import TodoForm from './TodoForm.vue'

const store = useTodoStore()
const $q = useQuasar()

const categories = ref(['Homework', 'Personal Project', 'Hometask'])
const formVisible = ref(false)
const selectedTodo = ref(null)
const updateFormVisible = ref(false)

const todosByCategory = (category) => {
  return store.getTodobyCategorie(category)
}

const checkTodo = (todo) => {
  store.CheckTodo(todo.id)
}

const openForm = () => {
  formVisible.value = true
}
const removeTodo = (id) => {
  store.RemoveTodo(id)
}

const openUpdateForm = (todo) => {
  selectedTodo.value = todo
  updateFormVisible.value = true
}
</script>

<style scoped>
.todo-list {
  display: flex;
  justify-content: center;
}

.column {
  flex: 1;
  padding: 20px;
}

.todo-card {
  margin-bottom: 20px;
}

.todo-form {
  max-width: 400px;
}

.button-before-click {
  background-color: #f0f0f0;
  color: #000;
  border-color: #000;
  transition: background-color 0.5s;
}
</style>
