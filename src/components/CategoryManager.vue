<template>
  <div>
    <q-input v-model="newCategory" label="Nouvelle catégorie" />
    <q-btn label="Ajouter Catégorie" @click="addCategory" />
    <!-- Afficher et gérer les catégories existantes -->
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  emits: ['update:categories'],
  setup(_, { emit }) {
    const newCategory = ref('')

    function addCategory() {
      if (newCategory.value.trim()) {
        emit('update:categories', newCategory.value)
        newCategory.value = ''
      }
    }

    // ... méthodes pour modifier ou supprimer des catégories

    return { newCategory, addCategory }
  }
}
</script>
