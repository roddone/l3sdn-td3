<template>
    <div class="q-pa-md" style="max-width: 400px">
  
      <q-form
        class="q-gutter-md"
        @submit="onSubmit"
        @reset="onReset"
      >
        <q-input
          v-model="name"
          filled
          label="Name"
          hint="Name of the todo"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please write a name']"
        />
  
        <q-input
          v-model="desc"
          filled
          label="Description"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Please type a description',
          ]"
        />
    
        <div class="btn">
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
  
    </div>

    <div class="q-pa-md">

        Chose a date :
    

    <q-btn icon="event" round color="primary">
      <q-popup-proxy transition-show="scale" cover transition-hide="scale" @before-show="updateProxy">
        <q-date v-model="proxyDate">
          <div class="row items-center justify-end q-gutter-sm">
            <q-btn v-close-popup label="Cancel" color="primary" flat />
            <q-btn v-close-popup label="OK" color="primary" flat @click="save" />
          </div>
        </q-date>
      </q-popup-proxy>
    </q-btn>
  </div>


  </template>
  
  <script>
  import { useQuasar } from 'quasar'
  import { ref } from 'vue'
  
  export default {
    setup () {
      const $q = useQuasar()
      const date = ref('2019/03/01')
      const proxyDate = ref('2019/03/01')

  
      const name = ref(null)
      const age = ref(null)
      const accept = ref(false)
  
      return {
        name,
        age,
        accept,
        date,
        proxyDate,

        updateProxy () {
        proxyDate.value = date.value
      },

      save () {
        date.value = proxyDate.value
      },
  
        onSubmit () {
          if (accept.value !== true) {
            $q.notify({
              color: 'red-5',
              textColor: 'white',
              icon: 'warning',
              message: 'You need to accept the license and terms first'
            })
          }
          else {
            $q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: 'Submitted'
            })
          }
        },
  
        onReset () {
          name.value = null
          age.value = null
          accept.value = false
        }
      }
    }
  }



  </script>
  
  <style scoped>
  .q-pa-md {
    max-width: 200px;
    margin-left: auto;
    margin-right: auto;
  }

  .btn {
    max-width: 200px;
    margin-left: auto;
    margin-right: auto;
  }
  
  </style>