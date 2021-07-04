import axios from 'axios';

const api = axios.create({
    baseURL: 'https://9f8f4a0b99f7.ngrok.io',
})

export default api;