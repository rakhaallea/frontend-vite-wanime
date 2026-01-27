import axios from 'axios';

const api = axios.create({
    publicURL: 'https://api.jikan.moe/v4',
    baseURL: 'http://localhost:3000',
});

export default api;