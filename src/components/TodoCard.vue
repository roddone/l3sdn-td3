<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">{{ todo.name }}</div>
      <div class="text-subtitle2">{{ todo.descr }}</div>
    </q-card-section>

    <q-separator />

    <div class="q-pa-md">
      <q-checkbox v-model="todo.checked" />
    </div>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'

const { props } = getCurrentInstance()

const todo = ref(props.todo)
</script>
