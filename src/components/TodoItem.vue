<template>
  <q-item>
    <q-item-section side>
      <q-checkbox v-model="checked" @change="emitToggleCompletion" />
    </q-item-section>

    <q-item-section :class="{ 'text-strike': checked }">
      <q-item-label>{{ todo.title }}</q-item-label>
      <q-item-label caption>{{ todo.category }}</q-item-label>
      <q-item-label caption>{{ todo.description }}</q-item-label>
      <q-item-label v-if="todo.dueDate" caption>Échéance: {{ todo.dueDate }}</q-item-label>
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
