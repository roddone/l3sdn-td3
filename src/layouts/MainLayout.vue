<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-green-5">
        <q-toolbar-title> Twisty - A handy ToDo App </q-toolbar-title>

        <q-btn
          to="/"
          exact
          flat
          dense
          icon="home"
          class="q-mr-sm"
        />

        <q-btn
          to="/list"
          exact
          flat
          dense
          icon="list"
          class="q-mr-sm"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>

</script>
