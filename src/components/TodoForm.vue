<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form class="q-gutter-md" @submit="onSubmit" @reset="onReset">
      <q-input
        v-model="name"
        filled
        label="Name"
        hint="Name of the todo"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please write a name']"
      />
      <q-input
        v-model="descr"
        filled
        label="Description"
        lazy-rules
        :rules="[(val) => (val !== null && val !== '') || 'Please type a description']"
      />

      <div class="q-pa-md" style="max-width: 300px">
        <div class="q-gutter-md">
          <q-select v-model="model" :options="options" label="Standard" />
        </div>
      </div>

      <div class="q-pa-md">
        Choose a date :
        <q-btn icon="event" round color="primary">
          <q-popup-proxy
            transition-show="scale"
            cover
            transition-hide="scale"
            @before-show="updateProxy"
          >
            <q-date v-model="proxyDate">
              <div class="row items-center justify-end q-gutter-sm">
                <q-btn v-close-popup label="Cancel" color="primary" flat />
                <q-btn v-close-popup label="OK" color="primary" flat @click="save" />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-btn>
      </div>

      <div class="btn">
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTodoStore } from '../stores/todostore.js'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const name = ref(null)
const descr = ref(null)
const accept = ref(false)
const date = ref('2019/03/01')
const proxyDate = ref('2019/03/01')
const model = ref(null)
const options = ['Homework', 'Personal Project', 'Hometask']
const store = useTodoStore()

const props = defineProps(['todo'])

onMounted(() => {
  if (props.todo) {
    name.value = props.todo.name
    descr.value = props.todo.descr
    date.value = props.todo.date
    model.value = props.todo.categorie
  }
})

const updateProxy = () => {
  proxyDate.value = date.value
}

const save = () => {
  date.value = proxyDate.value
}

const onSubmit = () => {
  if (!name.value) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'You need to accept the license and terms first'
    })
  } else {
    if (props.todo) {
      store.UpdateTodo(props.todo.id, name.value, descr.value, date.value, model.value)
    } else {
      const id = store.Todos.length + 1
      store.AddTodo({
        id: id,
        name: name.value,
        descr: descr.value,
        date: date.value,
        categorie: model.value,
        checked: false
      })
    }

    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Submitted'
    })
    onReset()
  }
}

const onReset = () => {
  name.value = null
  descr.value = null
  model.value = null
  accept.value = false
}
</script>

<style scoped>
.q-pa-md {
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
}

.btn {
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
}
</style>
