<template>
  <div class="category-container">
    <h2 class="q-mb-md text-h6">Gérer les catégories</h2>
    <ul class="q-pl-md">
      <li v-for="category in categories" :key="category.id" class="q-mb-xs">
        {{ category.name }}
        <q-btn color="negative" icon="delete" class="q-ml-sm" @click="deleteCategory(category)" />
      </li>
    </ul>
    <form class="q-mt-md" @submit.prevent="createCategory">
      <label for="categoryName" class="q-mb-xs">Nouvelle catégorie:</label>
      <q-input v-model="newCategory" type="text" outlined dense required />
      <q-btn type="submit" color="primary" class="q-mt-md">Créer la catégorie</q-btn>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { id: 1, name: 'Travail' },
        { id: 2, name: 'Personnel' }
      ],
      newCategory: ''
    }
  },
  methods: {
    createCategory() {
      const newCategoryId = this.categories.length + 1
      this.categories.push({ id: newCategoryId, name: this.newCategory })
      this.newCategory = ''
    },
    deleteCategory(category) {
      const index = this.categories.indexOf(category)
      if (index !== -1) {
        this.categories.splice(index, 1)
      }
    }
  }
}
</script>

<style scoped>
.category-container ul {
  list-style-type: none;
  padding: 0;
}

.category-container ul li {
  margin-bottom: 5px;
}

.category-container ul li q-btn {
  margin-left: 5px;
}
</style>
