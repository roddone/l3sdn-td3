<template>
  <div class="container-list">
    <q-list v-if="listStore.length > 0" padding bordered class="rounded-borders">
      <q-expansion-item
        v-for="list in listStore"
        :key="list.id"
        icon="perm_identity"
        :label="list.title"
      >
        <q-card class="">
          <q-card-section>
            {{ list.description }}
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>

    <div v-else>
      <q-card class="q-ma-md">
        <q-card-section>
          <q-item-label header> No list found </q-item-label>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { useListStore } from 'src/stores/list-store'
import { ref } from 'vue'

const listStore = useListStore().getList
</script>

<style scoped>
.container-list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 70%;
  width: 70%;
  margin: 2em;
}
</style>
