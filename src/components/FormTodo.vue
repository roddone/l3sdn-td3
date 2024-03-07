<script setup>
import maLocale from 'src/LocaleHelper'
import { useTasks } from 'stores/tasks'
import { ref } from 'vue'
const tasksStore = useTasks()
const task = ref('')
const description = ref('')
const date = ref('')

const addTask = () => {
  if (task.value.trim() && description.value.trim() && date.value) {
    tasksStore.addTask({
      title: task.value.trim(),
      description: description.value.trim(),
      date: date.value,
      done: false
    })
    task.value = ''
    description.value = ''
    date.value = ''
  } else {
    alert('Veuillez remplir les champs')
  }
}
</script>

<template>
  <div class="flex">
    <div class="flex-1">
      <q-input v-model="task" placeholder="Ajouter une tâche"></q-input>
      <q-input
        v-model="description"
        placeholder="Ajouter une description"
        filled
        type="textarea"
        class="flex-1"
      ></q-input>
    </div>
    <q-date
      v-model="date"
      :locale="maLocale"
      class="flex-1"
      mask="MM-DD-YYYY"
      subtitle="Veuillez choisir une date"
    ></q-date>
  </div>
  <q-btn label="Ajouter une tâche" @click="addTask"></q-btn>
</template>

<style>
.flex {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 1rem;
}
.flex-1 {
  flex: 1;
}
</style>
