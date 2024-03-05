<template>
  <div>
    <TaskCreate />
    <CategoryManagement />
    <!-- Ajoutez d'autres composants nécessaires -->
  </div>
</template>

<script>
import TaskCreate from 'src/components/TaskCreate.vue'
import CategoryManagement from 'src/components/CategoryManagement.vue'

export default {
  components: {
    TaskCreate,
    CategoryManagement
    // Ajoutez d'autres composants nécessaires
  }
}
</script>
