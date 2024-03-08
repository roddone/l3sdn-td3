<template>
  <div class="q-pa-md">
    <q-list bordered separator>
      <todo-item
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @remove-todo="removeTodo"
        @toggle-completion="toggleCompletion"
      />
    </q-list>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  components: { TodoItem },
  props: {
    todos: Array
  },
  emits: ['remove-todo', 'toggle-completion'],
  methods: {
    removeTodo(id) {
      this.$emit('remove-todo', id)
    },
    toggleCompletion(id) {
      this.$emit('toggle-completion', id)
    }
  }
}
</script>
