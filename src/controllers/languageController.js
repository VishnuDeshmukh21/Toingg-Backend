const apiService = require('../services/apiService');
const { getHeaders } = require('../utils/apiHelper');

exports.getSupportedLanguages = async (req, res) => {
  try {
    const response = await apiService.get('/get_supported_languages', getHeaders());
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.toString());
  }
};