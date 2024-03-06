<template>
  <div class="q-pa-md">
    <q-form v-model="formValid" @submit="addTask">
      <q-input v-model="newTask.name" label="Nom de la tâche" filled dense :rules="[val => !!val || 'Ce champ est requis']"></q-input>
      <q-input v-model="newTask.details" label="Détails de la tâche" filled dense :rules="[val => !!val || 'Ce champ est requis']"></q-input>
      <q-toggle v-model="newTask.completed" label="Terminée" dense></q-toggle> 
      <q-btn class="q-mt-md" color="primary" label="Ajouter" :disable="!formValid"></q-btn> 
    </q-form>

    <q-list bordered class="q-mt-md">
      <q-linear-progress stripe size="10px" :value="completedTasksPercentage" color="primary" class="q-mb-md"></q-linear-progress>
      <div class="text-completed-tasks">{{ completedTasksCount }}/{{ tasks.length }} tâches complétées</div>

      <q-item v-for="(task, index) in tasks" :key="index">
        <q-item-section>
          <q-checkbox v-model="task.completed" color="positive" class="q-checkbox-text"> Tâche {{ index + 1 }} terminée </q-checkbox>
        </q-item-section>
        <q-item-section>
          <div>
            <q-item-label>{{ task.name }}</q-item-label>
            <q-badge v-if="task.completed" color="green" label="Terminée"></q-badge>
            <q-badge v-else color="red" label="Non terminée"></q-badge>
          </div>
          <q-banner class="bg-primary text-white" color="primary" label="Détails" clickable> Détails </q-banner>
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
import { ref, computed } from 'vue'

const newTask = ref({ name: '', details: '', completed: false }) 
const tasks = ref([
  { name: 'Tâche 1', details: 'Détails de la tâche 1', completed: true, showDetails: true },
  { name: 'Tâche 2', details: 'Détails de la tâche 2', completed: false, showDetails: true },
  { name: 'Tâche 3', details: 'Détails de la tâche 3', completed: false, showDetails: true }
])

const formValid = ref(false)

const addTask = () => {
  if (newTask.value.name.trim() !== '' || newTask.value.details.trim() !== '') {
    tasks.value.push({
      name: newTask.value.name,
      details: newTask.value.details,
      completed: newTask.value.completed, 
      showDetails: true
    })
    newTask.value = { name: '', details: '', completed: false } 
    formValid.value = false
  }
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}

const completedTasksCount = computed(() => {
  return tasks.value.filter(task => task.completed).length
})

const completedTasksPercentage = computed(() => {
  return (completedTasksCount.value / tasks.value.length)
})

</script>

<style>
.q-item-section-side {
  display: flex;
  align-items: center;
}

.text-completed-tasks {
  text-align: center;
  margin-bottom: 10px;
}

.q-checkbox-text {
  margin-left: 5px;
}
</style>
