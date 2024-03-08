<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      elevated
      class="bg-deep-purple text-white"
      style="box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)"
    >
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar icon="list" class="q-mr-md" />
          My Enhanced Todo List
        </q-toolbar-title>
        <!-- Placeholder for potential navigation or action buttons -->
        <q-btn flat round icon="menu" @click="toggleDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above side="left" bordered>
      <q-list>
        <q-item-label header>Navigation</q-item-label>
        <q-item v-ripple clickable>
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item v-ripple clickable>
          <q-item-section>About</q-item-section>
        </q-item>
        <!-- More navigation items can be added here -->
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page class="q-pa-md">
        <index-page />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import IndexPage from 'pages/IndexPage.vue'
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped>
/* Background and Layout */
.q-layout {
  --q-color-primary: #1976d2; /* Blue shade for primary actions */
  --q-color-secondary: #26a69a; /* Teal for secondary elements */
  --q-color-accent: #9c27b0; /* Purple for accents and highlights */
  background-color: #f5f5f5; /* Light grey background for contrast */
}

/* Header Styling */
.q-header {
  border-bottom: 1px solid #e0e0e0; /* Subtle separation from content */
}

.q-toolbar {
  font-weight: 500;
  font-size: 20px; /* Larger, more prominent title */
}

.q-toolbar-title {
  letter-spacing: 0.05rem; /* Spacing for a cleaner look */
}

/* Enhancing Button Visuals */
.q-btn {
  background-color: var(--q-color-primary);
  color: #fff;
  border-radius: 4px; /* Rounded corners for buttons */
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
}

.q-btn:hover {
  filter: brightness(105%); /* Slight highlight on hover */
}

/* Input Field Enhancements */
.q-input {
  border-radius: 4px; /* Rounded corners for input fields */
}

.q-input .q-field__control {
  background-color: #fff;
  border: 1px solid #e0e0e0; /* Defined borders for clarity */
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); /* Inner shadow for depth */
}

.q-input .q-field__control:hover,
.q-input .q-field--focused .q-field__control {
  border-color: var(--q-color-primary); /* Highlight focus/hover */
}

/* Todo Item Customizations */
.todo-item {
  transition: all 0.3s ease; /* Smooth transition for interactive effects */
}

.todo-item:hover {
  transform: translateY(-2px); /* Slight lift effect on hover */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Enhanced shadow for depth */
}
</style>
