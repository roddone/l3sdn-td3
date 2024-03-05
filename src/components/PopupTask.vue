<template>
  <div class="popup">
      <h2 contenteditable="true" @input="update('title', $event)">{{ props.title }}</h2>
      <p contenteditable="true" @input="update('description', $event)">{{ props.description }}</p>
      <q-btn label="Fermer" @click="closePopup" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

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
  }
})

const emit = defineEmits(['close', 'update'])

const closePopup = () => {
  emit('close')
}

const update = (title, event) => {
  let currentdata = {
    index: props.index,
    title: props.title,
    description: props.description,
    done: props.done
  }
  if (title === 'title') {
    currentdata.title = event.target.innerText
  } else {
    currentdata.description = event.target.innerText
  }
  emit('update', currentdata)
}

</script>

<style>
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

</style>
