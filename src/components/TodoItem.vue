<template>
  <q-item class="todo-item">
    <q-checkbox v-model="checked" @change="emitToggleCompletion" />
    <q-item-section :class="{ 'text-strike': checked }">
      <q-item-label>{{ todo.title }}</q-item-label>
      <q-item-label caption>{{ todo.category }}</q-item-label>
      <q-item-label caption>{{ todo.description }}</q-item-label>
      <q-item-label v-if="todo.dueDate" caption>Échéance: {{ todo.dueDate }}</q-item-label>
      <q-item-label>
        <q-chip v-if="checked" color="green">Complet</q-chip>
        <q-chip v-else color="red">Incomplet</q-chip>
      </q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-btn dense flat color="negative" icon="delete" @click="removeTodo" />
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: {
    todo: Object
  },
  emits: ['remove-todo', 'toggle-completion'],
  data() {
    return {
      checked: this.todo.completed
    }
  },
  methods: {
    removeTodo() {
      this.$emit('remove-todo', this.todo.id)
    },
    emitToggleCompletion() {
      this.checked = !this.checked
      this.$emit('toggle-completion', this.todo.id)
    }
  },
  watch: {
    'todo.completed': function (newVal) {
      this.checked = newVal
    }
  }
}
</script>

<style>
.todo-item {
  margin-bottom: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;

  .text-strike {
    text-decoration: line-through;
  }

  .q-item-label {
    margin-right: 8px;
  }
}
</style>
