<template>
    <q-page>
        <q-list bordered>
            <q-select
                v-model="sortOption"
                label="Trier par"
                :options="sortOptions"
                @change="sortTasks"
            ></q-select>
            <q-item
                v-for="task in sortedTasks"
                :key="task.id"
                clickable
                @click="showTask(task.id)"
            >
                <q-item-section>
                    <q-card>
                        <q-card-section>
                            <q-badge
                                :color="task.priorite.value === 'haute' ? 'red' : task.priorite.value === 'moyenne' ? 'orange' : 'green'"
                            >
                                {{ task.priorite.label }}
                            </q-badge>
                            <q-badge
                                :color="task.categorie.value === 'travail' ? 'blue' : task.categorie.value === 'maison' ? 'green' : task.categorie.value === 'cours' ? 'purple' : task.categorie.value === 'sport' ? 'orange' : task.categorie.value === 'loisirs' ? 'pink' : task.categorie.value === 'personnel' ? 'brown' : 'grey'"
                            >
                                {{ task.categorie.label }}
                            </q-badge>
                            <q-item-label header class="text-h5">{{ task.nom }}</q-item-label>
                            <q-item-label header>{{ task.description }}</q-item-label>
                            <q-item-label caption>{{ task.deadline }} - {{ useTimeAgo(task.deadline) }}</q-item-label>
                        </q-card-section>
                    </q-card>
                </q-item-section>
            </q-item>
        </q-list>
    </q-page>
</template>

<script setup>
import { useTasksStore } from 'src/stores/TaskStore'
import { ref, computed } from 'vue'
import { useTimeAgo } from '@vueuse/core'

const taskStore = useTasksStore()

const sortOption = ref({ label : 'Deadline', value : 'deadline'})
const sortOptions = [
    { label: 'Deadline', value: 'deadline' },
    { label: 'Priorité', value: 'priorite' },
    { label: 'Catégorie', value: 'categorie' }
]

const showTask = (id) => {
    console.log('showTask', id)
}

const sortTasks = () => {
    if (sortOption.value.value === 'deadline') {
        taskStore.tasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
    } else if (sortOption.value.value === 'priorite') {
        taskStore.tasks.sort((a, b) => a.priorite.value.localeCompare(b.priorite.value))
    } else if (sortOption.value.value === 'categorie') {
        taskStore.tasks.sort((a, b) => a.categorie.value.localeCompare(b.categorie.value))
    }
}

const sortedTasks = computed(() => {
    return taskStore.tasks
})  
</script>