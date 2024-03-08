<template>
  <div class="q-pa-md" style="max-width: 800px">
    <q-form class="q-gutter-md" @submit.prevent="onSubmit">
      <div class="q-gutter-x-md row items-start">
        <q-input
          v-model="todoName"
          filled
          label="Your todo"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          v-model="todoCategory"
          filled
          label="Category"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
      </div>
      <div class="q-gutter-x-md row items-start">
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" @click="onReset" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodosStorage } from '../stores/todo'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const todoName = ref('')
const todoCategory = ref('')

const todosStorage = useTodosStorage()

function onSubmit() {
  if (todoName.value) {
    todosStorage.addTodo({
      name: todoName.value,
      category: todoCategory.value,
      status: 'notdone'
    })
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Todo added'
    })
    onReset() 
  } else {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'Please type something for the todo'
    })
  }
}

function onReset() {
  todoName.value = ''
}
</script>
