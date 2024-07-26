const express = require('express');
const callController = require('../controllers/callController');

const router = express.Router();

router.post('/make', callController.makeCall);
router.get('/status', callController.getCallStatus);
router.get('/transcription', callController.getTranscription);
router.get('/post_analysis', callController.getPostCallAnalysis);

module.exports = router;