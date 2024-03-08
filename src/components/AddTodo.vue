<template>
  <div class="q-pa-md">
    <q-input v-model="newTodo.title" filled label="Titre" />
    <q-input v-model="newTodo.description" filled type="textarea" label="Description" />
    <q-select v-model="newTodo.category" filled :options="categories" label="Catégorie" />
    <q-input v-model="newTodo.dueDate" filled mask="date" label="Date d'échéance (optionnelle)" />
    <q-btn label="Ajouter" color="primary" class="q-mt-md" @click="submit" />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    categories: Array
  },
  emits: ['add-todo'],
  setup(_, { emit }) {
    const newTodo = ref({
      title: '',
      description: '',
      category: '',
      dueDate: ''
    })

    function submit() {
      if (newTodo.value.title.trim()) {
        emit('add-todo', { ...newTodo.value })
        newTodo.value = { title: '', description: '', category: '', dueDate: '' }
      }
    }

    return { newTodo, submit }
  }
}
</script>
<style>
.add-todo {
  max-width: 600px;
  margin: auto;
}

.add-todo .q-btn {
  margin-top: 10px;
}
</style>
