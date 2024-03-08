<template>
  <div class="todo-form">
    <h2 class="todo-form__title">Add New Todo</h2>
    <div class="todo-form__content">
      <q-form @submit="onSubmit" @reset="onReset">
        <q-input
          v-model="description"
          filled
          label="Todo description"
          hint="Example: Learn Vue"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
          class="todo-form__input"
        />

        <q-input
          v-model="todo_date"
          filled
          label="Todo date"
          mask="date"
          :rules="['date']"
          class="todo-form__input"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="todo_date" :events="events">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <div class="todo-form__buttons">
          <q-btn label="Submit" type="submit" color="primary" class="todo-form__button" />
          <q-btn label="Reset" type="reset" color="primary" flat class="todo-form__button" />
          <router-link to="/" class="q-btn todo-form__button" :class="{ primary: true, flat: true }"
            >Go to Home</router-link
          >
        </div>
      </q-form>
    </div>
  </div>
</template>

<script setup>
import { useQuasar, date } from 'quasar'
import { useTodoStore } from '../stores/todoStore.js'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const $q = useQuasar()
const route = useRoute()

const description = ref(null)
const events = ref([])

const actual_date = date.formatDate(Date.now(), 'YYYY/MM/DD')
const todo_date = ref(actual_date)

const todos = useTodoStore()

onMounted(() => {
  fetchDate()
})

function fetchDate() {
  events.value = todos.getTodoList().map((todo) => {
    return date.formatDate(todo.date, 'YYYY/MM/DD')
  })
}

function onSubmit() {
  const newID = parseInt(todos.getLastId()) + 1
  const todo = {
    id: newID,
    description: `${description.value}`,
    state: 'Not Done',
    date: date.formatDate(todo_date.value, 'YYYY-MM-DD')
  }
  todos.addTodo(todo)
  fetchDate()

  $q.notify({
    color: 'green-4',
    textColor: 'white',
    icon: 'cloud_done',
    message: 'Todo added',
    caption: description.value
  })
}

function onReset() {
  description.value = null
  todo_date.value = actual_date
}
</script>

<style scoped>
.todo-form {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.todo-form__title {
  text-align: center;
  margin-bottom: 20px;
}

.todo-form__content {
  margin-top: 20px;
}

.todo-form__input {
  margin-bottom: 20px;
}

.todo-form__buttons {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.todo-form__button {
  flex: 1;
  margin-right: 10px;
}
</style>
