<template>
  <div class="container-form">
    <q-form class="q-gutter-md" @submit="onSubmit" @reset="onReset">
      <q-input
        v-model="title"
        filled
        label="Title *"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        v-model="description"
        filled
        label="description *"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <div class="q-pa-md">
        <div class="q-gutter-md row items-start">
          <q-date v-model="date" />
        </div>
      </div>

      <div class="div">
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

    <p>{{ date }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useListStore } from 'src/stores/list-store'

export default {
  setup() {
    const date = ref('2019/02/01')
    const title = ref(null)
    const description = ref(null)

    return {
      title,
      description,
      date,

      onSubmit() {
        useListStore().addList({
          title: title.value,
          description: description.value,
          date: date.value
        })
        title.value = null
        description.value = null
        date.value = false
      },

      onReset() {
        title.value = null
        description.value = null
        date.value = false
      }
    }
  }
}
</script>

<style scoped>
.div {
  display: flex;
  justify-content: space-around;
}

.container-form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 2em;
}
</style>
