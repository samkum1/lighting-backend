const axios = require('axios');

const apiClient = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        'api-key': process.env.API_KEY,
        'Content-Type': 'application/json',
    },
});

module.exports = apiClient;
