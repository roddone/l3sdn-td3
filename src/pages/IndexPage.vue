<template>
  <div class="container">
    <form-list />
    <list-display />
  </div>
  <div>{{ listStore }}</div>
</template>

<script setup>
import FormList from 'components/FormList.vue'
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
  height: 100vh;
  width: 100vw;
}
</style>
