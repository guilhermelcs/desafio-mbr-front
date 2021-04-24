import axios from 'axios'

const api = axios.create({
    baseURL: 'https://desafio-mbr-api.herokuapp.com/api'
})

export default api