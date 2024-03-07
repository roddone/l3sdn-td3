<template>
  <div class="flex justify-between items-center p-2 bg-gray-100 rounded-lg">
    <div :class="{ 'line-through': todo.completed }">
      {{ todo.text }}
    </div>
    <div class="text-xs text-gray-600">
      Créé le: {{ todo.created }}
      <span v-if="todo.due">| À faire avant: {{ todo.due }}</span>
    </div>
    <div>
      <q-checkbox
        :model-value="todo.completed"
        class="q-mr-md"
        @update:model-value="onToggleCompletion"
      />
      <q-btn icon="delete" flat @click="onRemove" />
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
