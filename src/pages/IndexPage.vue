<template>
  <div class="container">
    <form-task />
    <list-display />
  </div>
  <div>{{ listStore }}</div>
</template>

<script setup>
import FormTask from 'components/FormTask.vue'
import ListDisplay from 'src/components/ListDisplay.vue'
import { useListStore } from 'src/stores/list-store'
import { ref } from 'vue'

const listStore = ref(useListStore().getList)
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
  width: 98vw;
}
</style>
