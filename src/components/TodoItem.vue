<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{ todo.title }}</div>
      <div class="text-subtitle2">{{ todo.category }}</div>
      <p>{{ todo.description }}</p>
      <div v-if="todo.dueDate" class="text-caption">Échéance : {{ todo.dueDate }}</div>
    </q-card-section>
    <q-card-actions>
      <q-btn color="negative" label="Supprimer" @click="removeTodo" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: {
    todo: Object
  },
  emits: ['remove-todo'],
  methods: {
    removeTodo() {
      this.$emit('remove-todo', this.todo.id)
    }
  }
}
</script>
