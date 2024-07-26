const axios = require('axios');
const config = require('../config/config');

const instance = axios.create({
  baseURL: config.API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${config.AUTH_TOKEN}`
  }
});

module.exports = instance;