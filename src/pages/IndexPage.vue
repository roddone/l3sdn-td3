<template>
  <q-page class="">
    <div class="flex">
      <PopupTask
        v-if="modal.show"
        :index="modal.index"
        :title="modal.title"
        :description="modal.description"
        :done="modal.done"
        @close="modal.show = false"
        @update="update"
      />
      <h1>Todo List</h1>
      <q-input v-model="task" placeholder="Ajouter une tâche"></q-input>
      <q-input
        v-model="description"
        placeholder="Ajouter une description"
        filled
        type="textarea"
      ></q-input>
      <q-btn label="Ajouter une tâche" @click="addTask"></q-btn>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <q-card class="my-card">
          <q-card-section class="cursor-pointer basic-flex items-center" @click="openTask(index)">

          <q-checkbox v-model="task.done" @update:model-value="toggleDone(index)"></q-checkbox>
          <span class="flex-1"  :class="{ 'task-done': task.done }">{{ task.title }}</span>
          <q-btn
            flat
            dense
            icon="close"
           class="pl-5" @click="removeTask(index)"></q-btn>
          </q-card-section>
          </q-card>
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
  if (task.value.trim() && description.value.trim()) {
    tasksStore.addTask({
      title: task.value.trim(),
      description: description.value.trim(),
      done: false
    })
    task.value = ''
    description.value = ''
  }else {
    alert('Veuillez remplir les champs')
  }
}

const update = (data) => {
  tasksStore.updateTask(data.index, {
    title: data.title,
    description: data.description,
    done: data.done
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

.flex-1 {
  flex: 1;
}
.basic-flex {
  display: flex;
}
.pl-5 {
  margin-left: 10px;
}
.cursor-pointer {
  cursor: pointer;
}
.items-center {
  align-items: center;
}
</style>
