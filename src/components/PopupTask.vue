<script setup>
import { defineProps, defineEmits } from 'vue'
import { useTasks } from 'stores/tasks'
import { ref } from 'vue'
import maLocale from 'src/LocaleHelper'
const tasksStore = useTasks()

const props = defineProps({
  index: {
    type: Number,
    default: 0
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  done: {
    type: Boolean,
    default: false
  },
  date: {
    type: String,
    default: ''
  }
})

const data = ref({
  index: props.index,
  title: props.title,
  description: props.description,
  done: props.done,
  date: props.date
})

const emit = defineEmits(['close'])

const closePopup = () => {
  emit('close')
}

const update = () => {
  tasksStore.updateTask(data.value.index, data.value)
}

</script>

<template>
  <div class="popup">
    <div class="flex">
      <span class="text-2xl">Edition du todo</span>
      <q-input v-model="data.title"  placeholder="Nom de la tâche" @update:model-value="update"></q-input>

      <q-input
        v-model="data.description"
        placeholder="Description"
        filled
        type="textarea"
        @update:model-value="update"
      ></q-input>
      <q-date  v-model="data.date" :locale="maLocale" mask="MM-DD-YYYY" subtitle="Changer la date?" @update:model-value="update"></q-date>
      <q-btn label="Fermer" @click="closePopup" />
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  flex-direction: column;
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vw;
  background-color: white;
  padding: 2rem;
  z-index: 9999;
}
[contenteditable] {
  border: 1px solid #ccc;
  padding: 0.5rem;
  margin: 0.5rem 0;
  width: 100%;
  min-height: 2rem;
}
.text-2xl {
  font-size: 2.5rem;
  font-weight: bold;
}
</style>
