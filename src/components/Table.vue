<template>
  <div>
    <div class="table-responsive">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Destinatario</th>
            <th scope="col">E-mail</th>
            <th scope="col">Cep</th>
            <th scope="col">Estado</th>
            <th scope="col">UF</th>
            <th scope="col">Telefone</th>
            <th scope="col">Complemento</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="brinde  in brindes" :key="brinde.id">
            <th scope="row">{{ brinde.id }}</th>
            <td>{{ brinde.destinatario }}</td>
            <td>{{ brinde.email }}</td>
            <td>{{ brinde.cep }}</td>
            <td>{{ brinde.estado }}</td>
            <td>{{ brinde.uf }}</td>
            <td>{{ brinde.telefone }}</td>
            <td>{{ brinde.complemento }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue'

  const props = defineProps({
    brindes: {
      type: Array,
      required: true
    }
  })

</script>

<style scoped>

</style>