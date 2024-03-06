<template>
  <div class="container-page">
    <h1>To Do List</h1>
    <div v-if="listStore.length > 0" class="container-list">
      <q-slide-item
        v-for="(list, index) in listStore"
        :key="list.id"
        right-color="red"
        @right="deleteTask(index)"
      >
        <template v-slot:right>
          <q-icon name="delete" />
        </template>

        <div class="row">
          <q-checkbox
            :key="list.id"
            v-model="list.active"
            checked-icon="fa-solid fa-circle-check"
            unchecked-icon="fa-regular fa-circle"
            :class="{ checked: list.active }"
          >
          <h6> {{ list.title }} </h6>
          </q-checkbox>
          <div class="end-row">
            {{ list.date }}
            <q-btn round icon="edit" @click="goToSeePage(index + 1)"></q-btn>
          </div>
        </div>
      </q-slide-item>
    </div>

    <div v-else class="container-list">
      <q-card>
        <q-item-label header> No list found </q-item-label>
      </q-card>
    </div>
    <h6>slide right to delete</h6>
  </div>
</template>

<script setup>
import { useListStore } from 'src/stores/list-store'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToSeePage = (id) => {
  router.replace({ path: `/view/${id}` })
}

const deleteTask = (id) => {
  useListStore().deleteList(id)
}

const listStore = useListStore().getList
</script>

<style scoped>
.container-page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.container-list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  border: 1px solid black;
  border-radius: 5px;
  width: 70%;
  margin: 2em;
}

.row {
  border-bottom: 1px solid black;
  margin-inline: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.row:last-child {
  border-bottom: 0px;
}

.end-row {
  display: flex;
  align-items: center;
  gap: 1em;
}

.checked {
  text-decoration: line-through;
}

.q-checkbox {
  border: 0em;
}

button {
  margin: 1em;
}
</style>
