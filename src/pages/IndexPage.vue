<template>
  <q-page class="">
    <div class="flex">
      <PopupTask v-if="modal.show" :index="modal.index" :title="modal.title" :description="modal.description" :done="modal.done" @close="modal.show = false" @update="update"  />
      <h1>Todo List</h1>
      <q-input v-model="task" placeholder="Ajouter une tache"></q-input>
      <q-input
      v-model="description" placeholder="Ajouter une description"
      filled
      type="textarea"
      ></q-input>
      <q-btn label="Ajouter une tache" @click="addTask"></q-btn>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <q-checkbox v-model="task.done" @change="toggleDone(index)"></q-checkbox>
          <span  :class="{ 'task-done': task.done }" @click="openTask(index)">{{ task.title }}</span>
          <q-btn
            flat
            dense
            icon="close"
           class="pl-5" @click="removeTask(index)"></q-btn>
        </li>
      </ul>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTasks } from 'stores/tasks'
import PopupTask from 'components/PopupTask.vue'

const tasksStore = useTasks()

const task = ref('')
const description = ref('')
tasksStore.loadTasks()
const tasks = tasksStore.tasks
const modal = ref({
  title: null,
  description: null,
  done: null,
  index: null,
  show: false
})

const addTask = () => {
  if (task.value.trim()) {
    tasksStore.addTask({
      title: task.value.trim(),
      description: description.value.trim(),
      done: false,
    })
    task.value = ''
    description.value = ''
  }
}

const update = (index, title, description, done) => {
  tasksStore.updateTask(index, {
    title: title,
    description: description,
    done: done
  })
}

const openTask = (index) => {
  modal.value.title = tasks[index].title
  modal.value.description = tasks[index].description
  modal.value.done = tasks[index].done
  modal.value.index = index
  modal.value.show = true
}

const removeTask = (index) => {
  tasksStore.removeTask(index)
}

const toggleDone = (index) => {
  tasksStore.toggleDone(index)
}
</script>

<style>
.task-done {
  text-decoration: line-through;
}
ul {
  list-style: none;
  padding: 0;
}
.flex {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
}
.pl-5 {
  margin-left: 10px;
}
</style>
