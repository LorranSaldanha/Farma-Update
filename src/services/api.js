import axios from 'axios';

//https://server-farmacia.herokuapp.com

const api = axios.create({
  baseURL: 'https://server-farmacia.herokuapp.com'
})

export default api