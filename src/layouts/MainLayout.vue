<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../stores/list.js'
const task = ref('')
const desc = ref('')
const date = ref('')

const store = useTodoStore()

const addTask = () => {
  store.addTask({ task: task.value, desc: desc.value, date: date.value })
  task.value = ''
  desc.value = ''
  date.value = ''
}

const tasks = store.tasks
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-accent shadow-2">
      <q-toolbar>
        <q-toolbar-title> Todo List </q-toolbar-title>

        <div>Alban Stievenard & Mehdi Trari</div>
      </q-toolbar>
    </q-header>

    <div>
      <div class="fixed-center" style="min-width: 600px">
        <q-input v-model="task" class="q-mb-md" square filled label="Nouvelle tâche" />
        <q-input v-model="desc" class="q-mb-md" square filled label="Description" />
        <q-input
          v-model="date"
          filled
          mask="date"
          label="yyyy/mm/dd"
          class="q-mb-md"
          :rules="['date']"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy">
                <q-date v-model="date"></q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-btn label="Ajouter" color="accent" @click="addTask" />
      </div>
    </div>
    <div>
      <ul>
        <li v-for="(item, index) in tasks" :key="index">
          {{ item.task }} - {{ item.desc }} - {{ item.date }}
        </li>
      </ul>
    </div>
  </q-layout>
</template>
