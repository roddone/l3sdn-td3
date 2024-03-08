<template>
  <div class="container">test {{ id }}</div>
</template>

<script setup>
import { ref } from 'vue'
import { useListStore } from 'src/stores/list-store'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = +route.params.id
const task = ref(useListStore().getList.find((task) => task.id === id))
console.log(task)
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
