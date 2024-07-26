require('dotenv').config();

module.exports = {
  API_URL: process.env.API_URL,
  AUTH_TOKEN: process.env.AUTH_TOKEN,
  PORT: process.env.PORT || 5000
};