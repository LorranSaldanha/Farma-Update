import axios from 'axios';


const api = axios.create({
  baseURL: 'https://server.centrofarma.digital'
})

export default api