<template>
  <q-page class="flex flex-center">
    <category-manager :categories="categories" @update:categories="updateCategories" />
    <add-todo :categories="categories" @add-todo="addTodo" />
    <todo-list :todos="todos" @remove-todo="removeTodo" @toggle-completion="toggleCompletion" />
  </q-page>
</template>

<script>
import { ref, watch, onMounted } from 'vue'
import AddTodo from '../components/AddTodo.vue'
import TodoList from '../components/TodoList.vue'
import CategoryManager from '../components/CategoryManager.vue'

export default {
  components: { AddTodo, TodoList, CategoryManager },
  setup() {
    const todos = ref([])
    const categories = ref(['Travail', 'Personnel', 'Urgent', 'Autre'])

    onMounted(() => {
      const savedTodos = JSON.parse(localStorage.getItem('todos')) || []
      todos.value = savedTodos
    })

    watch(
      todos,
      (newTodos) => {
        localStorage.setItem('todos', JSON.stringify(newTodos))
      },
      { deep: true }
    )

    const addTodo = (newTodo) => {
      todos.value.push({ ...newTodo, id: Date.now(), completed: false })
    }

    const removeTodo = (todoId) => {
      todos.value = todos.value.filter((todo) => todo.id !== todoId)
    }

    const toggleCompletion = (todoId) => {
      const index = todos.value.findIndex((t) => t.id === todoId)
      if (index !== -1) {
        todos.value[index] = { ...todos.value[index], completed: !todos.value[index].completed }
      }
    }

    const updateCategories = (newCategory) => {
      categories.value.push(newCategory)
    }

    return { todos, categories, addTodo, removeTodo, toggleCompletion, updateCategories }
  }
}
</script>

<style>
.q-page {
  padding: 20px;
}
</style>
