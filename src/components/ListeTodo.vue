<template>
  <div class="todo-container">
    <div class="q-pa-md">
      <div class="text-h5 q-mb-md">Ma To-Do List</div>
      <q-table
      v-model:selected="selected"
        :rows="tasks"
        :columns="columns"
        row-key="id"
        :selected-rows="selected"
        selection="multiple"
        virtual-scroll
        :rows-per-page-options="[5, 10, 15]"
      >
        <template v-slot:body-cell-priority="props">
          <div
            :class="getPriorityClass(props.row.state)"
            class="priority-cell"
          >
            {{ props.row.state }}
          </div>
        </template>

        <template v-slot:top-right>
          <q-space />
          <q-btn-dropdown
  label="Changer le statut"
  :disable="selected.length === 0"
>
  <q-list>
    <q-item v-for="(state, index) in statusOptions" :key="index">
      <q-item-section clickable @click="changeStatus(state)">
        {{ state }}
      </q-item-section>
    </q-item>
  </q-list>
</q-btn-dropdown>

          <q-btn
            color="negative"
            label="Supprimer la sélection"
            :disable="selected.length === 0"
            @click="deleteTodo()"
          />
        </template>
      </q-table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from 'src/stores/todoStore'

const statusOptions = ['Non avancé', 'En progression', 'Terminé']

// Accéder au store des Todos
const store = useTodoStore()

// Initialiser les lignes
const tasks = ref(store.getTodoList)

// Lignes sélectionnées
const selected = ref([])

// Définir les colonnes du tableau
const columns = [
  { name: 'description', align: 'center', label: 'Description', field: row => row.description, sortable: true },
  { name: 'date', label: 'Date', align: 'center', field :'date', sortable: true },
  { name: 'etat', label: 'Etat', field: 'state', sortable: true },
]

// Changer le statut des Todos
const changeStatus = (state) => {
  // Changer le statut des Todos sélectionnés
  selected.value.forEach(todo => {
    store.changeTodoStatus(todo.id, state)
  })
}

// Supprimer les Todos sélectionnés
const deleteTodo = () => {
  // Supprimer les Todos sélectionnés
  store.deleteTodos(selected.value)
  selected.value = []
}

// Fonction pour déterminer la couleur du statut
const statusColor = status => {
  // Définir la couleur en fonction du statut
  switch (status) {
    case 'Fait':
      return 'green'
    case 'EnCours':
      return 'orange'
    case 'NonCommencé':
      return 'red'
    default:
      return 'grey'
  }
}

</script>

<style scoped>
.todo-container {
  max-width: 800px; /* Nouvelle largeur maximale */
  margin: auto;
  margin-top: 50px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.priority-cell {
  border-radius: 4px;
  padding: 4px 8px;
  font-weight: bold;
}

.bg-important {
  background-color: #ff6b6b;
}

.bg-medium {
  background-color: #ffe66d;
}

.bg-trkl {
  background-color: #48dbfb;
}
</style>
