<template>
 <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-separator />

    <div class="q-pa-md">
        <q-checkbox v-model="value" />
    </div>
    </q-card>
</template>


<script setup>

import { ref } from 'vue'

const value = ref(false)



</script>