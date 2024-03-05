<template>
<div class="q-pa-md">
    <q-table
      title="TodoList"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>



</template>


<script setup>


const columns = [
    {
        name: 'name',
        label: 'Homework',
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
    },
    {
        name: 'name',
        label: 'Personal Project',
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
    },
    {
        name: 'name',
        label: 'HomeTask',
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
    }
]
</script>