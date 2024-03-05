<template>
  <div class="popup">
    <div class="popup-content">
      <h2 contenteditable="true" @input="update">{{ props.title }}</h2>
      <p contenteditable="true" @input="update">{{ props.description }}</p>
      <button @click="closePopup">Close</button>
    </div>
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

const update = () => {
  emit('update', {
    index: props.index,
    title: props.title,
    description: props.description,
    done: props.done
  })
}
</script>

<style>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}
</style>
