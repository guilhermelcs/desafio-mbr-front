<template>
  <section>
    <Page title="Cadastre-se">
      <Input col="6" id="destinatario" type="text" label="Destinatário" v-model="destinatario" :isValid="destinatario != null && destinatario.length > 0"/>
      <Input @input="handleMaskTel" col="6" id="telefone" type="text" label="Telefone" v-model="telefone" :isValid="telefone != null && telefone.length > 13"/>
      <Input col="8" id="email" type="email" label="E-mail" v-model="email" :isValid="validateEmail(email)"/>
      <Input @input="handleMaskCep(); getAdress()" col="4" id="cep" type="text" label="Cep" v-model="cep" :isValid="cep != null && cep.length > 8 && cepInvalido == false" customFeedback="Hmmm, esse cep parece estar errado..."/>
      <Input col="6" id="bairro" type="text" label="Bairro" v-model="bairro" :isValid="bairro != null && bairro.length > 0"/>
      <Input col="6" id="rua" type="text" label="Logradouro" v-model="rua" :isValid="rua != null && rua.length > 0"/>
      <Input col="9" id="estado" type="text" label="Estado" v-model="estado" :isValid="estado != null && estado.length > 0"/>
      <div class="col-3 mt-3">
        <label class="form-label" for="uf">Uf</label>
        <select @blur="showError = uf" class="form-select" name="uf" id="uf" v-model="uf">
          <option v-for="uf in ufs" :key="uf.uf" :value="uf.uf">{{ uf.uf }}</option>
        </select>
        <div v-if="!showError" class="invalid-feedback d-block">
          Ops, preencha este campo direito!
        </div>
      </div>
      <Input col="12" id="complemento" type="text" label="Complemento" v-model="complemento" :isValid="true"/>
      <div class="col-12 mt-3">
        <div v-if="error" class="alert alert-danger" role="alert">
          Ops, this error ocurred: {{ error }}
        </div>
        <button @click="createBrinde" v-if="telefone && telefone.length > 13 && email && telefone.length && validateEmail(email) && bairro && rua && cep && cep.length > 8 && estado && uf" class="btn btn-primary w-100">Cadastrar</button>
        <button v-else class="btn btn-primary w-100 disabled">Cadastrar</button>
      </div>
      <Modal v-if="showModal" title="Parabéns!" text="Seu cadastro foi concluído com sucesso, agora é só esperar o brinde chegar na sua casa!"/>

      <div class="col-12 mt-3">
        <router-link to="/brindes">
          <button class="btn btn-warning w-100">Ir para Listagem de Brindes</button>
        </router-link>
      </div>
    </Page>
  </section>
</template>

<script setup>
  import Page from '../components/Page.vue'
  import Input from '../components/Input.vue'
  import Modal from '../components/Modal.vue'
  import { maskCep, maskTel, validateEmail } from '../utils'
  import { ref } from 'vue'
  import axios from 'axios'
  import api from '../api'

  const telefone = ref(null)
  const email = ref(null)
  const destinatario = ref(null)
  const complemento = ref(null)
  const bairro = ref(null)
  const rua = ref(null)
  const cep = ref(null)
  const cepInvalido = ref(false)
  const estado = ref(null)
  const uf = ref(null)

  const loading = ref(false)
  const error = ref(false)
  const adress = ref(null)
  const showError = ref(true)
  const showModal = ref(false)

  const ufs = [
    { uf: 'AC', nome: 'Acre' },
    { uf: 'AL', nome: 'Alagoas' },
    { uf: 'AP', nome: 'Amapá' },
    { uf: 'AM', nome: 'Amazonas' },
    { uf: 'BA', nome: 'Bahia' },
    { uf: 'CE', nome: 'Ceará' },
    { uf: 'DF', nome: 'Distrito Federal' },
    { uf: 'ES', nome: 'Espirito Santo' },
    { uf: 'GO', nome: 'Goiás' },
    { uf: 'MA', nome: 'Maranhão' },
    { uf: 'MS', nome: 'Mato Grosso do Sul' },
    { uf: 'MT', nome: 'Mato Grosso' },
    { uf: 'MG', nome: 'Minas Gerais' },
    { uf: 'PA', nome: 'Pará' },
    { uf: 'PB', nome: 'Paraíba' },
    { uf: 'PR', nome: 'Paraná' },
    { uf: 'PE', nome: 'Pernambuco' },
    { uf: 'PI', nome: 'Piauí' },
    { uf: 'RJ', nome: 'Rio de Janeiro' },
    { uf: 'RN', nome: 'Rio Grande do Norte' },
    { uf: 'RS', nome: 'Rio Grande do Sul' },
    { uf: 'RO', nome: 'Rondônia' },
    { uf: 'RR', nome: 'Roraima' },
    { uf: 'SC', nome: 'Santa Catarina' },
    { uf: 'SP', nome: 'São Paulo' },
    { uf: 'SE', nome: 'Sergipe' },
    { uf: 'TO', nome: 'Tocantins' }
  ]

  async function getAdress() {
    if( cep.value && cep.value.length === 9 ) {
      try {
        loading.value = true
        adress.value = await axios.get(`https://viacep.com.br/ws/${cep.value}/json`)
        if( !adress.value.data.erro ) {
          cepInvalido.value = false
          bairro.value = adress.value.data.bairro
          rua.value = adress.value.data.logradouro
          uf.value = adress.value.data.uf
          estado.value = adress.value.data.localidade
        }
        else { 
          cepInvalido.value = true
          bairro.value = null
          rua.value = null
          uf.value = null
          estado.value = null
        }
      }
      catch(e) {
        error.value = e.message
        loading.value = false
        cepInvalido.value = true
        error = e.message
        console.log('error', e.message)
      }
      finally {
        loading.value = false
      }
    }
  }

  const handleMaskCep = () => {
    cep.value = maskCep(cep.value)
  } 

  const handleMaskTel = () => {
    telefone.value = maskTel(telefone.value)
  }

  const createBrinde = async () => {
    const body = {
      telefone: telefone.value,
      email: email.value,
      destinatario: destinatario.value,
      complemento: complemento.value,
      bairro: bairro.value,
      logradouro: rua.value,
      cep: cep.value,
      estado: estado.value,
      uf: uf.value,
    }

    try {
      await api.post('/brindes', body)
      showModal.value = true
      telefone.value = null
      email.value = null
      destinatario.value = null
      complemento.value = null
      bairro.value = null
      rua.value = null
      cep.value = null
      estado.value = null
      uf.value = null
    }
    catch(e) {
      showModal.value = false
      error.value = e.message
      console.log('error: ', e.message)
    }
    finally {
      
    }
  }

</script>

<style>
  .invalid-feedback {
    color: #fff;
    font-size: 0.775em;
  }
</style>
