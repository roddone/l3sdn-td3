<template>
  <!--<div class="q-pa-md">-->
    <q-table class="full-width" title="Todo List" :rows="todos" :columns="columns" row-key="id">
    <template v-slot:body-cell-actions="props">
      <q-td :props="props">
        <q-btn dense flat icon="edit" @click="openEditDialog(props.row)" />
        <q-btn dense flat icon="delete" @click="confirmDelete(props.row.id)" />
      </q-td>
    </template>
  </q-table>

  <q-dialog v-model="dialog" persistent>
    <q-card>
      <q-card-section>
        <div class="text-h6">Modifier Todo</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="submitUpdateTodo">
          <q-input v-model="editedTodo.name" filled label="Nom" />
          <q-input v-model="editedTodo.category" filled label="Catégorie" />
          <q-select v-model="editedTodo.status" filled :options="['done', 'notdone']" label="Statut" />
          <q-card-actions align="right">
            <q-btn v-close-popup flat label="Annuler" color="primary" />
            <q-btn flat label="Modifier" type="submit" color="primary" />
          </q-card-actions>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
  
  <q-dialog v-model="isDeleteDialogOpen">
    <q-card>
      <q-card-section>
        <div class="text-h6">Confirmer la suppression</div>
        <div>Êtes-vous sûr de vouloir supprimer cette todo ?</div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn v-close-popup flat label="Annuler" color="primary" />
        <q-btn v-close-popup flat label="Supprimer" color="negative" @click="deleteConfirmedTodo" />
      </q-card-actions>
    </q-card>
  </q-dialog>

</template>

<script setup>
import { useTodosStorage } from '../stores/todo.js'
import { ref, computed } from 'vue'

const dialog = ref(false)
const editedTodo = ref({})
const todosStorage = useTodosStorage()
const todos = computed(() => todosStorage.todos)

const columns = [
  {
    name: 'name', 
    required: true,
    label: 'Name', 
    align: 'left',
    field: (r) => r.name, 
    sortable: true
  },
  { name: 'category', align: 'center', label: 'Category', field: 'category', sortable: true },
  { name: 'status', label: 'Status', field: 'status', sortable: true }
]
columns.push({ name: 'actions', label: 'Actions', field: 'actions' })

const isDeleteDialogOpen = ref(false)
const todoToDelete = ref(null)

function confirmDelete(id) {
  todoToDelete.value = id
  isDeleteDialogOpen.value = true
}

function deleteConfirmedTodo() {
  if (todoToDelete.value !== null) {
    todosStorage.deleteTodo(todoToDelete.value)
    todoToDelete.value = null
  }
}


function openEditDialog(todo) {
  editedTodo.value = { ...todo }
  dialog.value = true
}

function submitUpdateTodo() {
  todosStorage.updateTodo(editedTodo.value)
  dialog.value = false
}
</script>
