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
        v-model="desc"
        filled
        label="Description"
        lazy-rules
        :rules="[(val) => (val !== null && val !== '') || 'Please type a description']"
      />

      <div class="q-pa-md" style="max-width: 300px">
    <div class="q-gutter-md">
      <q-select v-model="model" :options="options" label="Standard"  />
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

import { useTodoStore } from '../stores/todostore.js'

import { ref } from 'vue'
import { useQuasar } from 'quasar'

const store = useTodoStore()
const $q = useQuasar()
const name = ref(null)
const desc = ref(null)
const accept = ref(false)
const date = ref('2019/03/01')
const proxyDate = ref('2019/03/01')

const model = ref(null)
const options = ['Homework', 'Personal Project','Hometask']


const updateProxy = () => {
  proxyDate.value = date.value
}

const save = () => {
  date.value = proxyDate.value
}

const onSubmit = () => {
  if (!accept.value) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'You need to accept the license and terms first'
    })
  } else {
    store.addTodo({
      name: name.value,
      descr: descr.value,
      date: date.value,
      categorie: categorie.value,
      checked: false
    })

    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Submitted'
    })
  }
}

const onReset = () => {
  name.value = null
  desc.value = null
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
