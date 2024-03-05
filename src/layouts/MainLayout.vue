<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-accent shadow-2">
      <q-toolbar>
        <q-toolbar-title> Todo List </q-toolbar-title>

        <div>Alban Stievenard & Mehdi Trari</div>
      </q-toolbar>
    </q-header>

    <div>
      <div class="fixed-center" style="min-width: 600px">
        <q-input v-model="task" class="q-mb-md" square filled label="Nouvelle tâche" />
        <q-input v-model="desc" class="q-mb-md" square filled label="Description" />
        <q-input
          v-model="date"
          filled
          mask="date"
          label="yyyy/mm/dd"
          class="q-mb-md"
          :rules="['date']"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy>
                <q-date v-model="date"></q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-btn label="Ajouter" type="submit" color="accent" />
      </div>
    </div>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
const task = ref('') // Pour les champs de tâche et descriptionconst task = ref('') // Création d'une variable réactive pour la nouvelle tâche
const desc = ref('') // Création d'une variable réactive pour la description
const date = ref('') // Pour le champ de sélection de date
</script>
