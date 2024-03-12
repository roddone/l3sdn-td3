<template>
  <q-card>
    <q-card-section class="row items-center">
      <q-input
        v-model="newTodoText"
        label="Description"
        outlined
        dense
        class="q-mb-sm"
      />
      <q-select
        v-model="selectedState"
        :options="stateOptions"
        label="État"
        outlined
        dense
        class="q-mb-sm"
      />
      <q-input
        v-model="creationDate"
        type="date"
        label="Date de création"
        outlined
        dense
        class="q-mb-sm"
        @click="fetchDate"
      />
      <q-btn color="primary" label="Ajouter" dense @click="AjouterTodo" />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useQuasar, date } from 'quasar'
import { useTodoStore } from '../stores/todoStore.js'
import { useRoute } from 'vue-router'

const newTodoText = ref('')
const selectedState = ref('')
const creationDate = ref('')

const stateOptions = ['Non avancé', 'En progression', 'Terminé']
const $q = useQuasar()

const todoStore = useTodoStore()
const route = useRoute()

onMounted(() => {
  // Initialiser la date de création avec la date actuelle
  fetchDate()
})

onBeforeUnmount(() => {
  // Nettoyer les listeners d'événements
  document.removeEventListener('fetchDate', fetchDate)
})

function fetchDate() {
  creationDate.value = date.formatDate(new Date(), 'YYYY-MM-DD')
}

function AjouterTodo() {
  if (newTodoText.value.trim() === '') {
    $q.notify({
      type: 'negative',
      message: 'Veuillez entrer une description pour le Todo.'
    })
    return
  }

  if (!selectedState.value) {
    $q.notify({
      type: 'negative',
      message: 'Veuillez sélectionner un état pour le Todo.'
    })
    return
  }

  if (creationDate.value === '') {
    $q.notify({
      type: 'negative',
      message: 'Veuillez sélectionner une date de création pour le Todo.'
    })
    return
  }

  // Obtenir la date actuelle
  const currentDate = date.formatDate(new Date(), 'YYYY-MM-DD')

  const newTodo = {
    text: newTodoText.value.trim(),
    state: selectedState.value,
    creationDate: creationDate.value,
    description: newTodoText.value.trim(),
    // Ajouter la date actuelle à la nouvelle tâche
    date: currentDate
  }

  // Ajouter le Todo à la liste des Todos via le store
  todoStore.addTodo(newTodo)

  // Réinitialiser les champs
  newTodoText.value = ''
  selectedState.value = ''
  creationDate.value = ''
}

</script>