import axios from 'axios';

const api = axios.create({
    baseURL: 'https://vesciobox-backend.herokuapp.com'
});

export default api;