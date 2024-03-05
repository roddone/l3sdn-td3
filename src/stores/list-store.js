import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useListStore = defineStore('list', {
  state: () => ({
    list: ref([])
  }),
  getters: {
    listLength() {
      return this.list.length
    },
    listState() {
      return this.list.active
    },
    listTitle() {
      return this.list.title
    },
    listDate() {
      return this.list.date
    },
    getList() {
      return this.list
    }
  },
  actions: {
    addList(list) {
      this.list.push(list)
    }
  }
})
