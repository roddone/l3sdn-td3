<template>
  <div class="flex justify-between items-center p-2 bg-gray-100 rounded-lg">
    <div :class="{ 'line-through': todo.completed }">
      {{ todo.text }}
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
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  todo: {
    type: Object,
    required: true
  }
})

const emits = defineEmits(['remove', 'toggle'])

function onRemove() {
  emits('remove')
}

function onToggleCompletion(completed) {
  emits('toggle', { ...props.todo, completed })
}
</script>
