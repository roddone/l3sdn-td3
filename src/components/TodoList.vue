<template>
  <div class="q-pa-md">
    <q-table title="Liste des Tâches" :rows="todos" :columns="columns" row-key="id">
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="title" :props="props">{{ props.row.title }}</q-td>
          <q-td key="description" :props="props">{{ props.row.description }}</q-td>
          <q-td key="category" :props="props">{{ props.row.category }}</q-td>
          <q-td key="dueDate" :props="props">{{ props.row.dueDate || 'Aucune' }}</q-td>
          <q-td key="action" :props="props">
            <q-btn dense flat color="negative" icon="delete" @click="removeTodo(props.row.id)" />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TodoList',
  props: {
    todos: Array
  },
  emits: ['remove-todo'],
  data() {
    return {
      columns: [
        { name: 'title', align: 'left', label: 'Titre', field: (row) => row.title, sortable: true },
        {
          name: 'description',
          align: 'left',
          label: 'Description',
          field: (row) => row.description,
          sortable: true
        },
        { name: 'category', label: 'Catégorie', field: (row) => row.category, sortable: true },
        { name: 'dueDate', label: "Date d'Échéance", field: (row) => row.dueDate, sortable: true },
        { name: 'action', label: 'Action', field: (row) => row.id, sortable: false }
      ]
    }
  },
  methods: {
    removeTodo(id) {
      this.$emit('remove-todo', id)
    }
  }
})
</script>
