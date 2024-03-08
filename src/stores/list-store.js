import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useListStore = defineStore('list', {
  state: () => ({
    list: ref([])
  }),
  getters: {
    getList() {
      return this.list
    }
  },
  actions: {
    addList(list) {
      this.list.push(list)
    },
    deleteList(index) {
      this.list.splice(index, 1)
    },
    updateList({ index, list }) {
      this.list[index] = list
    }
  }
})
