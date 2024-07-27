const axios = require('axios');

const API_URL = process.env.API_URL;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;


const getSupportedLanguages = async (req, res) => {

  try {
    const response = await axios.get(`${API_URL}/get_supported_languages`, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Accept': 'application/json'
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error:', error); 
    if (error.response) {
      console.error('Error Response Data:', error.response.data);
      console.error('Error Response Status:', error.response.status);
    } else {
      console.error('Error Message:', error.message);
    }
    res.status(error.response ? error.response.status : 500).json({ error: error.message });
  }
  
};

const getSupportedVoices = async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/get_supported_voices`, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Accept': 'application/json'
      }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response ? error.response.status : 500).json({ error: error.message });
  }
};

module.exports = {
  getSupportedLanguages,
  getSupportedVoices
};
