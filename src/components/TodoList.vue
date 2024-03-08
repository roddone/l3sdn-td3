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
      <q-btn color="primary" label="Ajouter" class="full-width" @click="addTask" />
    </div>

    <div v-if="tasks.length > 0" class="q-pa-md task-list">
      <q-list bordered class="rounded-borders">
        <q-item
          v-for="(task, index) in tasks"
          :key="index"
          class="q-my-md q-px-md task-item"
          clickable
        >
          <q-item-section>
            <q-item-label>{{ task.name }}</q-item-label>
            <q-item-label caption>{{ task.description }}</q-item-label>
            <q-item-label caption>{{ task.date }}</q-item-label>
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
        date: ''
      },
      tasks: []
    }
  },
  methods: {
    addTask() {
      if (!this.newTask.name || !this.newTask.date) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'La tâche et la date sont obligatoires'
        })
        return
      }
      this.tasks.push({ ...this.newTask })
      this.newTask.name = ''
      this.newTask.description = ''
      this.newTask.date = ''
    },
    removeTask(index) {
      this.tasks.splice(index, 1)
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
  color: #007bff; /* Primary color */
}

.q-btn.full-width {
  margin-top: 24px;
}

/* Vous pouvez ajouter des media queries pour rendre la mise en page réactive */
@media (max-width: 768px) {
  .todo-container {
    margin: 20px;
  }
}
</style>
