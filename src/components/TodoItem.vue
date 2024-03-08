<template>
  <div class="flex justify-between items-center p-4 bg-white rounded-lg shadow-md">
    <div :class="{ 'text-grey-500': todo.completed }">
      {{ todo.text }}
    </div>
    <div class="text-xs text-grey-400">
      Created on: {{ todo.created }}
      <span v-if="todo.due">| Due by: {{ todo.due }}</span>
    </div>
    <div>
      <q-checkbox
        :model-value="todo.completed"
        class="q-mr-md"
        @update:model-value="onToggleCompletion"
      />
      <q-btn icon="delete" flat color="negative" @click="onRemove" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useTodosStore } from 'stores/todos'

const { index, todo } = defineProps({
  index: Number,
  todo: Object
})

const store = useTodosStore()

function onRemove() {
  store.removeTodo(index)
}

function onToggleCompletion() {
  store.toggleTodoCompletion(index)
}
</script>
