<!-- TaskCreate.vue -->
<template>
  <div>
    <h2>Créer une tâche</h2>
    <form @submit.prevent="createTask">
      <label for="title">Titre:</label>
      <input v-model="newTask.title" type="text" required />

      <label for="description">Description:</label>
      <textarea v-model="newTask.description"></textarea>

      <label for="category">Catégorie:</label>
      <input v-model="newTask.category" type="text" />

      <label for="dueDate">Date d'échéance:</label>
      <input v-model="newTask.dueDate" type="date" />

      <button type="submit">Créer la tâche</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: {
        title: '',
        description: '',
        category: '',
        dueDate: ''
      }
    }
  },
  methods: {
    createTask() {
      // Logique pour créer une tâche
      console.log('Nouvelle tâche:', this.newTask)
      // Ajoutez la logique pour enregistrer la tâche dans votre état global ou API
    }
  }
}
</script>
