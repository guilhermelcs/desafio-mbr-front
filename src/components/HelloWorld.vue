<template>
  <h1>{{ users && users.data && users.data.toma }}</h1>
  <input v-model="cep" @input="getAdress" type="number">
  <Input label="Bairro" v-model="bairro" type="text"/>
  <p v-if="loading">Loading...</p>
  <p v-else>{{ adress && adress.data && adress.data.bairro }}</p>
</template>

<script>
import { ref, watchEffect } from 'vue'
import axios from 'axios'
import api from '../api'
import Input from './Input.vue'

export default {
  components: { Input },
  setup() {
    let loading = ref(false)
    let cep = ref('')
    let bairro = ref('')
    let users = ref([])
    let adress = ref([])

    async function getUsers() {
      users.value = await api.get('/users')
    }
    getUsers()
    
    async function getAdress() {
      if( cep.value.length == 8 ) {
        try {
          loading.value = true
          adress.value = await axios.get(`https://viacep.com.br/ws/${cep.value}/json`)
        }
        catch(e) {
          loading.value = false
          console.log(e)
        }
        finally {
          loading.value = false
        }
      }
    }

    watchEffect(() => console.log('Hello World', bairro.value))

    return {
      users,
      adress,
      cep,
      getAdress,
      loading,
      bairro
    }
  }
}

</script>

<style scoped>
a {
  color: #42b983;
}
</style>
