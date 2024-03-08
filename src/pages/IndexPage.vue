<template>
  <div class="container">
    <form-task />
    <list-display />
  </div>
</template>

<script setup>
import FormTask from 'components/FormTask.vue'
import ListDisplay from 'src/components/ListDisplay.vue'
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
