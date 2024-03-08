<template>
  <div class="q-pa-md full-width">
    <q-table
    v-model:selected="selected"
    title="Todo List"
      :rows="rows"
      :columns="columns"
      row-key="id"
      selection="multiple"
    />
  </div>
  <div class="q-pa-md q-gutter-sm">
    <q-btn style="background: #FF0080; color: white" label="Delete To-Dos" @click="deleteTodos()"/>
    <q-btn-dropdown
      split
      color="teal"
      label="Change status"
    >
      <q-list>
        <q-item clickable @click="changeStatus('Done')">
          <q-item-section>
            <q-item-label>Done</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable @click="changeStatus('In progress')">
          <q-item-section>
            <q-item-label>In Progress</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable @click="changeStatus('Not done')">
          <q-item-section>
            <q-item-label>Not Done</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { useTodoStore } from 'src/stores/todoStore'

const columns = [
    {
    name: 'description',
    required: true,
    label: 'Description',
    align: 'left',
    field: row => row.description,
    format: val => `${val}`,
    sortable: true
    },
  { name: 'date', align: 'center', label: 'Date', field: 'date', sortable: true },
  { name: 'etat', label: 'Etat', field: 'state', sortable: true },
]

const store = useTodoStore()
const rows = ref(store.getTodoList())

const selected = ref([])

const changeStatus = (status) => {
  store.changeTodoStatus(selected.value, status)
}

const deleteTodos = () => {
  store.deleteTodos(selected.value)
}
</script>