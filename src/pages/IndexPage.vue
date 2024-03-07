
<script setup>
import { ref } from 'vue'
import PopupTask from 'components/PopupTask.vue'
import FormTodo from 'components/FormTodo.vue'
import TodoList from 'components/TodoList.vue'

const modal = ref({
  title: null,
  description: null,
  done: null,
  index: null,
  show: false,
  date: null
})


const setModal = (data) => {
  modal.value.title = data.title
  modal.value.description = data.description
  modal.value.done = data.done
  modal.value.index = data.index
  modal.value.show = true
  modal.value.date = data.date
}
</script>
<template>
  <q-page class="">
    <div class="flex">
      <PopupTask
        v-if="modal.show"
        :index="modal.index"
        :title="modal.title"
        :description="modal.description"
        :done="modal.done"
        :date="modal.date"
        @close="modal.show = false"
      />
      <h1>Todo List</h1>
      <FormTodo/>
      <TodoList @emitModal="setModal"/>
    </div>
  </q-page>
</template>


<style scoped>
.task-done {
  text-decoration: line-through;
}
ul {
  list-style: none;
  padding: 0;
}
.flex {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
}

.flex-1 {
  flex: 1;
}
.basic-flex {
  display: flex;
}
.pl-5 {
  margin-left: 10px;
}
.cursor-pointer {
  cursor: pointer;
}
.items-center {
  align-items: center;
}
</style>
