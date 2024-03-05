<template>
  <div class="q-pa-md">
    <q-input v-model="newTask.name" placeholder="Nom de la tâche..."></q-input>
    <q-input v-model="newTask.details" placeholder="Détails de la tâche..."></q-input>
    <q-toggle v-model="newTask.completed" label="Terminée"></q-toggle> <!-- Nouveau champ pour choisir l'état de la tâche -->
    <br>
    <q-btn color="primary" label="Ajouter" @click="addTask"></q-btn>
    <q-list bordered>
      <q-item v-for="(task, index) in tasks" :key="index">
        <q-item-section>
          <q-checkbox v-model="task.completed" color="positive"></q-checkbox>
        </q-item-section>
        <q-item-section>
          <div>
            <q-item-label>{{ task.name }}</q-item-label>
            <span v-if="task.completed" style="color: green;">Terminée</span>
            <span v-else style="color: red;">Non terminée</span>
          </div>
          <q-btn color="primary" label="Détails" @click="toggleDetails(index)"></q-btn>
          <q-collapse v-model="task.showDetails">
            <q-card>
              <q-card-section>
                {{ task.details }}
              </q-card-section>
            </q-card>
          </q-collapse>
        </q-item-section>
        <q-item-section side>
          <q-btn color="deep-orange" glossy icon="delete" @click="deleteTask(index)"></q-btn>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newTask = ref({ name: '', details: '', completed: false }) // Initialiser l'état de la tâche à false
const tasks = ref([
  { name: 'Tâche 1', details: 'Détails de la tâche 1', completed: true, showDetails: true },
  { name: 'Tâche 2', details: 'Détails de la tâche 2', completed: false, showDetails: true },
  { name: 'Tâche 3', details: 'Détails de la tâche 3', completed: false, showDetails: true }
])

const addTask = () => {
  if (newTask.value.name.trim() !== '' || newTask.value.details.trim() !== '') {
    tasks.value.push({
      name: newTask.value.name,
      details: newTask.value.details,
      completed: newTask.value.completed, // Utiliser la valeur sélectionnée pour l'état de la tâche
      showDetails: true
    })
    newTask.value = { name: '', details: '', completed: false } // Réinitialiser les champs après l'ajout
  }
}

const toggleDetails = (index) => {
  tasks.value[index].showDetails = !tasks.value[index].showDetails
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}
</script>
