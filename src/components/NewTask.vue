<template>
    <q-page class="flex flex-top">
            <q-card style="width: 100%;">
                <q-card-section>
                    <q-form @submit="addTask">
                        <q-input
                            v-model="nom"
                            label="Nom"
                            counter
                            :rules="[val => val.length > 0 || 'Veuillez renseigner un nom']"
                        />
                        <q-input
                            v-model="description"
                            label="Description"
                            counter
                            type="textarea"
                            autogrow
                        />
                        <q-input
                            v-model="deadline"
                            label="Deadline"
                            type="date"
                        />
                        <q-select
                            v-model="categorie"
                            label="Catégorie"
                            :options="categories"
                        />
                        <q-select
                            v-model="priorite"
                            label="Priorité"
                            :options="priorites"
                        />
                        <q-btn
                            type="submit"
                            label="Ajouter"
                            color="green-5"
                            class="q-mt-md"
                            @click="addTask"
                        />
                    </q-form>
                </q-card-section>
            </q-card>
    </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useTasksStore } from 'src/stores/TaskStore'

const taskStore = useTasksStore()

const nom = ref('')
const description = ref('')
const deadline = ref('')
const categorie = ref('')
const categories = [
    { label: 'Travail', value: 'travail' },
    { label: 'Maison', value: 'maison'},
    { label: 'Cours', value: 'cours'},
    { label: 'Sport', value: 'sport'},
    { label: 'Loisirs', value: 'loisirs'},
    { label: 'Personnel', value: 'personnel' },
    { label: 'Autre', value: 'autre' }
]
const priorite = ref('')
const priorites = [
    { label: 'Basse', value: 'basse' },
    { label: 'Moyenne', value: 'moyenne'},
    { label: 'Haute', value: 'haute'}
]

const addTask = () => {
    const newTask = {
        id: generateId(),
        nom: nom.value,
        description: description.value,
        deadline: deadline.value,
        categorie: categorie.value,
        priorite: priorite.value
    }
    taskStore.addTask(newTask)
    resetForm()
}

const generateId = () => {
    return Math.random().toString(36).substr(2, 9)
}

const resetForm = () => {
    nom.value = ''
    description.value = ''
    deadline.value = ''
    categorie.value = ''
    priorite.value = ''
}
</script>