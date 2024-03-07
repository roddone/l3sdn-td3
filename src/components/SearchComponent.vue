<script setup>
import { ref } from 'vue'
import { defineEmits } from 'vue'
import { watch } from 'vue'

const emits = defineEmits(['search'])
const show = ref(false)
const search = ref('')

watch(search, () => {
  emits('search', search.value)
})
</script>
<template>
  <div class="container">
    <q-btn
      class="btn-search"
      unelevated
      round
      color="primary"
      icon="search"
      @click="show = !show"
    />

    <q-input v-show="show" v-model="search" outlined placeholder="Search" class="flex-1" />
  </div>
</template>

<style>
.btn-search {
  width: fit-content;
}
.container {
  position: relative;
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
}
.flex-1 {
  flex: 1;
}
</style>
