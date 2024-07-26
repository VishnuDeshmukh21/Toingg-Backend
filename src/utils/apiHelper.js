const config = require('../config/config');

exports.getHeaders = () => ({
  accept: 'application/json',
  Authorization: `Bearer ${config.AUTH_TOKEN}`
});