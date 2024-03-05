<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <TodoList />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TodoList from 'components/TodoList.vue'

const todos = ref([])
</script>
