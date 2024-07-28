const { validationResult } = require('express-validator');
const axios = require('axios');
const API_URL = process.env.API_URL;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const formidable = require('formidable');
const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

exports.pdfExtract = async (req, res) => {
  const form = new formidable.IncomingForm();
  
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error parsing the file' });
    }

    try {
      const pdfPath = files.pdf.filepath; // Changed 'path' to 'filepath' for compatibility with newer formidable versions
      const pdfData = fs.readFileSync(pdfPath);
      const pdfDoc = await PDFDocument.load(pdfData);
      const numPages = pdfDoc.getPageCount();
      let fullText = '';

      for (let i = 0; i < numPages; i++) {
        const page = pdfDoc.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');
        fullText += pageText + '\n';
      }

      res.status(200).json({ text: fullText });
    } catch (error) {
      res.status(500).json({ error: 'Error extracting PDF content' });
    }
  });
};

exports.createCampaign = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ detail: errors.array() });
  }
  console.log('Request Body:', req.body);
  try {
   
    // Extract data from request body
    const { title, voice, language, script, purpose, knowledgeBase, calendar, firstLine, tone, postCallAnalysis, postCallAnalysisSchema } = req.body;

    // Prepare the request payload
    const payload = {
      title,
      voice,
      language,
      script,
      purpose,
      knowledgeBase,
      calendar,
      firstLine,
      tone,
      postCallAnalysis,
      postCallAnalysisSchema
    };

    const response = await axios.post(`${API_URL}/create_campaign`, payload, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    res.status(201).json(response.data);
  } catch (error) {
    console.error('Error:', error); 
    if (error.response) {
      console.error('Error Response Data:', error.response.data);
      console.error('Error Response Status:', error.response.status);
      res.status(error.response.status).json({ error: error.response.data.detail || error.message });
    } else {
      console.error('Error Message:', error.message);
      res.status(500).json({ error: error.message });
    }
  }
};


exports.getCampaigns =async (req, res) => {

  try {
    const response = await axios.get(`${API_URL}/get_campaigns`, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Accept': 'application/json'
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    // Log complete error object for debugging
    console.error('Error:', error); // This will show you the full error object
    // Log response data from the error if available
    if (error.response) {
      console.error('Error Response Data:', error.response.data);
      console.error('Error Response Status:', error.response.status);
    } else {
      console.error('Error Message:', error.message);
    }
    res.status(error.response ? error.response.status : 500).json({ error: error.message });
  }
  
};



exports.updateCampaign = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ detail: errors.array() });
  }

  try {
    const { campaignModelData, campId } = req.body;

    const payload = {
      ...campaignModelData 
    };

    const response = await axios.put(`${API_URL}/update_campaign/${campId}`, payload, {
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
      res.status(error.response.status).json({ error: error.response.data.detail || error.message });
    } else {
      console.error('Error Message:', error.message);
      res.status(500).json({ error: error.message });
    }
  }
};
