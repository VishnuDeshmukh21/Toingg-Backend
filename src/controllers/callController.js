const { validationResult } = require('express-validator');
const axios = require('axios');
const API_URL = process.env.API_URL;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

exports.makeCall = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ detail: errors.array() });
  }

  try {
    // Extract data from request body
    const { name, phoneNumber, campID } = req.body;

    // Prepare the request payload
    const payload = { name, phoneNumber, campID };

    // Make API request to make the call
    const response = await axios.post(`${API_URL}/make_call`, payload, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error:', error);
    if (error.response) {
      console.error('Error Response Data:', error.response.data);
      console.error('Error Response Status:', error.response.status);
      res.status(error.response.status).json({ detail: error.response.data.detail || error.message });
    } else {
      console.error('Error Message:', error.message);
      res.status(500).json({ detail: error.message });
    }
  }
};


exports.getCallStatus = async (req, res) => {
  const { callId } = req.query;

  if (!callId) {
    return res.status(422).json({ detail: 'callId is required' });
  }

  try {
    // Make API request to get the call status
    const response = await axios.get(`${API_URL}/call_status`, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      params: { callId }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error:', error);
    if (error.response) {
      console.error('Error Response Data:', error.response.data);
      console.error('Error Response Status:', error.response.status);
      res.status(error.response.status).json({ detail: error.response.data.detail || error.message });
    } else {
      console.error('Error Message:', error.message);
      res.status(500).json({ detail: error.message });
    }
  }
};

exports.getTranscription = async (req, res) => {
  const { callId } = req.query;

  if (!callId) {
    return res.status(422).json({ detail: 'callId is required' });
  }

  try {
    // Make API request to get the call transcription
    const response = await axios.get(`${API_URL}/get_transcription`, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      params: { callId }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error:', error);
    if (error.response) {
      console.error('Error Response Data:', error.response.data);
      console.error('Error Response Status:', error.response.status);
      res.status(error.response.status).json({ detail: error.response.data.detail || error.message });
    } else {
      console.error('Error Message:', error.message);
      res.status(500).json({ detail: error.message });
    }
  }
};


exports.getPostCallAnalysis = async (req, res) => {
  const { callId } = req.query;

  if (!callId) {
    return res.status(422).json({ detail: 'callId is required' });
  }

  try {
    const response = await axios.get(`${API_URL}/get_post_call_analysis`, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      params: { callId }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error:', error);
    if (error.response) {
      console.error('Error Response Data:', error.response.data);
      console.error('Error Response Status:', error.response.status);
      res.status(error.response.status).json({ detail: error.response.data.detail || error.message });
    } else {
      console.error('Error Message:', error.message);
      res.status(500).json({ detail: error.message });
    }
  }
};
