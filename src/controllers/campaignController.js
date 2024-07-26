const apiService = require('../services/apiService');
const { getHeaders } = require('../utils/apiHelper');

exports.createCampaign = async (req, res) => {
  try {
    const response = await apiService.post('/create_campaign', req.body, getHeaders());
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.toString());
  }
};