<template>
  <div>
    <TaskCreate :categories="categories" />
    <CategoryManagement :categories="categories" />
  </div>
</template>

<script>
import TaskCreate from 'src/components/TaskCreate.vue'
import CategoryManagement from 'src/components/CategoryManagement.vue'

export default {
  components: {
    TaskCreate,
    CategoryManagement
  },
  data() {
    return {
      categories: []
    }
  }
}
</script>
