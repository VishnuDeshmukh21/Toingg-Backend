const express = require('express');
const { getSupportedLanguages, getSupportedVoices } = require('../controllers/languageController');

const router = express.Router();

router.get('/supported_languages', getSupportedLanguages);

router.get('/supported_voices', getSupportedVoices);

module.exports = router;
