const express = require('express');
const callController = require('../controllers/callController');
const validateRequest = require('../middleware/validateRequest');
const { makeCallSchema } = require('../utils/validation');

const router = express.Router();

router.post('/make', validateRequest(makeCallSchema), callController.makeCall);

router.get('/status', callController.getCallStatus);

router.get('/transcription', callController.getTranscription);

router.get('/post_analysis', callController.getPostCallAnalysis);

module.exports = router;
