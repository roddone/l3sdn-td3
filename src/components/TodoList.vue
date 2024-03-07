<script setup>
import { useTasks } from 'stores/tasks'
import { defineEmits } from 'vue'
import { ref } from 'vue'
import { computed } from 'vue'
import SearchComponent from 'components/SearchComponent.vue'
const tasksStore = useTasks()

tasksStore.loadTasks()

let tasks = ref(tasksStore.tasks)

const emit = defineEmits(['emitModal'])
const search = ref('')
const openTask = (task) => {
  if (!tasks.value.find((mytask) => mytask == task)) return
  let mytask = tasks.value.find((mytask) => mytask == task)
  emit('emitModal', mytask)
}

const removeTask = (task, event) => {
  event.stopPropagation()
  event.preventDefault()
  tasksStore.removeTask(task)
}

const toggleDone = () => {
  tasksStore.saveTasksToLocalStorage()
}

const dateDiffandNow = (date) => {
  let now = new Date()
  let dateTask = new Date(date)
  let diff = dateTask - now
  let days = Math.floor(diff / (1000 * 60 * 60 * 24))
  days = days + 1
  if (days < 0) return 'Date dépassée'
  return days + ' jours restants'
}

const renderList = (mysearch) => {
  search.value = mysearch
}

const filteredTasks = computed(() => {
  return tasks.value.filter((task) => {
    return (
      task.title.toLowerCase().includes(search.value.toLowerCase()) ||
      task.description.toLowerCase().includes(search.value.toLowerCase())
    )
  })
})
</script>
<template>
  <SearchComponent @search="renderList" />
  <ul>
    <li v-for="(task, index) in filteredTasks" :key="index">
      <q-card class="my-card">
        <q-card-section class="cursor-pointer basic-flex items-center" @click="openTask(task)">
          <q-checkbox v-model="task.done" @update:model-value="toggleDone()"></q-checkbox>
          <span class="flex-1" :class="{ 'task-done': task.done }">{{ task.title }}</span>
          <span>{{ dateDiffandNow(task.date) }}</span>
          <q-btn
            flat
            dense
            icon="close"
            class="pl-5 z-1000"
            @click="removeTask(task, $event)"
          ></q-btn>
        </q-card-section>
      </q-card>
    </li>
  </ul>
</template>

<style scoped>
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
.z-1000 {
  z-index: 1000;
}
</style>
