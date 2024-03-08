<template>
  <div class="todo-container">
    <div class="q-pa-md">
      <div class="text-h5 q-mb-md">Ma To-Do List</div>
      <q-input v-model="newTask.name" outlined label="Nom de la tâche" class="q-mb-md" />
      <q-input
        v-model="newTask.description"
        type="textarea"
        outlined
        label="Description de la tâche"
        class="q-mb-md"
      />
      <q-input v-model="newTask.date" outlined type="date" mask="YYYY-MM-DD" class="q-mb-md" />
      <q-select
        v-model="newTask.priority"
        outlined
        label="Priorité"
        class="q-mb-md"
        :options="priorityOptions"
      />
      <q-btn color="primary" label="Ajouter" class="full-width" @click="addTask" />
    </div>

    <div v-if="tasks.length > 0" class="q-pa-md task-list">
      <q-list bordered class="rounded-borders">
        <q-item
          v-for="(task, index) in tasks"
          :key="index"
          :class="getPriorityClass(task.priority)"
          class="q-my-md q-px-md task-item"
          clickable
        >
          <q-item-section>
            <q-item-label>{{ task.name }}</q-item-label>
            <q-item-label caption>{{ task.description }}</q-item-label>
            <q-item-label caption>{{ task.date }}</q-item-label>
            <q-item-label caption class="text-caption">{{ task.priority }}</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-btn
              flat
              round
              dense
              icon="delete"
              class="text-negative"
              @click="removeTask(index)"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      newTask: {
        name: '',
        description: '',
        date: '',
        priority: 'medium'
      },
      tasks: [],
      priorityOptions: [
        { label: 'Tranquille', value: 'trkl' },
        { label: 'Moyenne', value: 'medium' },
        { label: 'Importante', value: 'important' }
      ]
    }
  },
  methods: {
    addTask() {
      if (!this.newTask.name || !this.newTask.date || !this.newTask.priority) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Tous les champs sont obligatoires'
        })
        return
      }
      this.tasks.push({ ...this.newTask })
      this.resetNewTask()
    },
    resetNewTask() {
      this.newTask.name = ''
      this.newTask.description = ''
      this.newTask.date = ''
      this.newTask.priority = 'medium'
    },
    removeTask(index) {
      this.tasks.splice(index, 1)
    },
    getPriorityClass(priority) {
      return {
        'bg-important': priority === 'important',
        'bg-medium': priority === 'medium',
        'bg-trkl': priority === 'trkl'
      }
    }
  }
}
</script>

<style>
.todo-container {
  max-width: 600px;
  margin: auto;
  margin-top: 50px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.task-list {
  max-height: 400px;
  overflow-y: auto;
}

.task-item {
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.task-item:hover {
  background-color: #f5f5f5;
}

.full-width {
  width: 100%;
}

.rounded-borders {
  border-radius: 8px;
}

.text-h5 {
  font-weight: 700;
  color: #007bff;
}

.q-btn.full-width {
  margin-top: 24px;
}

@media (max-width: 768px) {
  .todo-container {
    margin: 20px;
  }
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
