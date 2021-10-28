const axios = require('axios');

const http = axios.create({
    baseURL:'http://localhost:5555',
    // headers: {'Content-Type': 'aplication/json'}
});

module.exports = http;