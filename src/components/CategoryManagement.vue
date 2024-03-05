<!-- CategoryManagement.vue -->
<template>
  <div>
    <h2>Gérer les catégories</h2>
    <ul>
      <li v-for="category in categories" :key="category.id">{{ category.name }}</li>
    </ul>
    <form @submit.prevent="createCategory">
      <label for="categoryName">Nouvelle catégorie:</label>
      <input v-model="newCategory" type="text" required />
      <button type="submit">Créer la catégorie</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: ['Travail', 'Personnel'],
      newCategory: ''
    }
  },
  methods: {
    createCategory() {
      // Logique pour créer une nouvelle catégorie
      this.categories.push(this.newCategory)
      this.newCategory = '' // Efface le champ après la création
    }
  }
}
</script>
