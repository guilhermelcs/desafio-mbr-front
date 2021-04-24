<template>
  <Page col="12" title="Brindes Salvos">
    <Input @input="getFilteredBrindes" v-model="brindeFilter" id="brindes" type="text" label="Pesquisar Brindes" col="12" :isValid="true" />
    <div class="col-12">
      <p v-if="loading">Um segundinho, estou carregando os dados...</p>
      <div v-if="brindes && !brindeFilter.length" class="lista-brindes mb-4">
        <Table 
          v-if="brindes.data.length"
          class="mt-3"
          :brindes="brindes.data ? brindes.data : []">
        </Table>
        <p v-else class="mt-3">Ops, não encontrei nada, tem certeza que já cadastrou algum brinde?</p>
      </div>
      <div v-if="brindeFilter && brindeFilter.length" class="lista-brindes mb-4">
        <Table v-if="brindes.data.length"
          class="mt-3"
          :brindes="brindes.data ? brindes.data : []">
        </Table>
        <p v-else class="mt-3">Ops, não encontrei nada :c</p>
      </div>
      <p v-if="error" class="mt-3">Ops, this error ocurred: {{ error }}</p>
      <router-link to="/cadastro">
        <button class="btn btn-warning w-100">Ir para o Cadastrao de Brindes</button>
      </router-link>
    </div>
  </Page>
</template>

<script setup>
  import Page from '../components/Page.vue'
  import Input from '../components/Input.vue'
  import Table from '../components/Table.vue'
  import { ref } from 'vue'
  import api from '../api'

  const brindes = ref('')
  const brindeFilter = ref('')
  const loading = ref(false)
  const error = ref(false)

  const getBrindes = async () => {
    try {
      loading.value = true
      brindes.value = await api.get('/brindes')
      error.value = false
    }
    catch(e) {
      loading.value = false
      error.value = e.message
      console.log(e)
    }
    finally {
      loading.value = false
    }
  }
  getBrindes()

  const getFilteredBrindes = async () => {
    try {
      loading.value = true
      brindes.value = await api.get(`/brindes/${brindeFilter.value}`)
    }
    catch(e) {
      loading.value = false
      console.log(e)
    }
    finally {
      loading.value = false
    }
  }
</script>

<style scoped>
</style>