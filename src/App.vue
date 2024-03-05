<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title> Ma Todo List </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="q-pa-md">
        <index-page />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import IndexPage from 'pages/IndexPage.vue'
</script>

<style scoped></style>
