const apiService = require('../services/apiService');
const { getHeaders } = require('../utils/apiHelper');

exports.makeCall = async (req, res) => {
  try {
    const response = await apiService.post('/make_call', req.body, getHeaders());
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.toString());
  }
};