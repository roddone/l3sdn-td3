<template>
  <q-page class="flex flex-center">
    <category-manager :categories="categories" @update:categories="updateCategories" />
    <add-todo :categories="categories" @add-todo="addTodo" />
    <todo-list :todos="todos" @remove-todo="removeTodo" />
  </q-page>
</template>

<script>
import { ref } from 'vue'
import AddTodo from '../components/AddTodo.vue'
import TodoList from '../components/TodoList.vue'
import CategoryManager from '../components/CategoryManager.vue'

export default {
  components: { AddTodo, TodoList, CategoryManager },
  setup() {
    const todos = ref([])
    const categories = ref(['Travail', 'Personnel', 'Urgent', 'Autre'])

    function addTodo(newTodo) {
      todos.value.push({ ...newTodo, id: Date.now() })
    }

    function removeTodo(todoId) {
      todos.value = todos.value.filter((todo) => todo.id !== todoId)
    }

    function updateCategories(newCategory) {
      categories.value.push(newCategory)
    }

    return { todos, categories, addTodo, removeTodo, updateCategories }
  }
}
</script>
