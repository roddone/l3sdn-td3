<template>
  <div class="task-container">
    <h2 class="q-mb-md text-h6">Créer une tâche</h2>
    <form class="q-mb-md" @submit.prevent="createTask">
      <q-input v-model="newTask.title" label="Titre" outlined dense required />
      <q-input v-model="newTask.description" label="Description" outlined textarea dense />
      <q-select
        v-model="newTask.category"
        label="Catégorie"
        outlined
        dense
        :options="categories.map((category) => ({ label: category.name, value: category.name }))"
      />
      <q-input v-model="newTask.dueDate" label="Date d'échéance" type="date" outlined dense />
      <q-btn type="submit" color="primary" class="q-mt-md">Créer la tâche</q-btn>
    </form>

    <div v-if="tasks.length" class="q-mt-md">
      <h3 class="q-mb-md text-h6">Tâches créées :</h3>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <strong>{{ task.title }}</strong> - {{ task.description }}
          <span v-if="task.category"> (Catégorie: {{ task.category }})</span>
          <span v-if="task.dueDate"> - Échéance: {{ task.dueDate }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: Array
  },
  data() {
    return {
      newTask: {
        title: '',
        description: '',
        category: '',
        dueDate: ''
      },
      tasks: [] // Liste des tâches créées
    }
  },
  methods: {
    createTask() {
      console.log('Nouvelle tâche:', this.newTask)
      this.tasks.push({ ...this.newTask, id: this.tasks.length + 1 })
      // Réinitialisez le formulaire
      this.newTask = {
        title: '',
        description: '',
        category: '',
        dueDate: ''
      }
    }
  }
}
</script>

<style scoped>
.task-container {
  max-width: 400px;
  margin: auto;
}

.q-input {
  max-width: 300px;
}

.q-btn {
  margin-top: 10px;
}
</style>
