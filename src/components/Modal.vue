<template>
  <div v-if="!closeModal" @click="closeModal = true" class="modal-overlay"></div>
  <div v-if="!closeModal" class="meuModal">
    <div class="meuModal-header">
      <h1>{{title}}</h1>
      <hr/>
    </div>
    <div class="meuModal-body">
      <p>{{text}}</p>
    </div>
    <div class="meuModal-footer">
      <button @click="closeModal = true" class="btn btn-primary">Fechar</button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    title: String,
    text: String
  })
  const closeModal = ref(false) 
</script>

<style scoped>
  @media (min-width:320px) {
    .meuModal {
      display: flex;
      flex-wrap: wrap;
      align-self: center;
      justify-content: space-evenly;
      flex-direction: column;
      align-items: flex-start;
      background: #fff;
      position: fixed;
      left: 0;
      right: 0;
      margin: auto;
      width: 80vw;
      z-index: 9000;
      padding: 20px 20px;
    }

    .modal-overlay {
      background: #0000007c;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 100vw;
      height: 100vh;
      z-index: 8000;
    }

    .meuModal-footer {
      align-self: flex-end;
    }

    h1 {
      color: #C61517;
      font-size: 30px;
    }

    p {
      color: #3b3b3b;
      font-size: 18px;
      padding-right: 0;
    }

    hr {
      border-bottom: 1px solid #c6151883;
    }
  }

  @media (min-width:1025px) {
    .modal-overlay {
      background: #0000007c;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 100vw;
      height: 100vh;
      z-index: 8000;
    }

    .meuModal {
      display: flex;
      flex-wrap: wrap;
      align-self: center;
      justify-content: space-evenly;
      flex-direction: column;
      align-items: flex-start;
      background: #fff;
      position: fixed;
      left: 0;
      right: 0;
      margin: auto;
      width: 50vw;
      z-index: 9000;
      padding: 20px 40px;
    }

    .meuModal-footer {
      align-self: flex-end;
    }

    h1 {
      color: #C61517;
      font-size: 30px;
    }

    p {
      color: #3b3b3b;
      font-size: 18px;
      padding-right: 40px;
    }

    hr {
      border-bottom: 1px solid #c6151883;
    }
  }
</style>