const express = require('express');
const languageController = require('../controllers/languageController');

const router = express.Router();

router.get('/languages', languageController.getSupportedLanguages);
router.get('/voices', languageController.getSupportedVoices);

module.exports = router;