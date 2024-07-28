const express = require('express');
const campaignController = require('../controllers/campaignController');
const validateRequest = require('../middleware/validateRequest');
const { createCampaignSchema, updateCampaignSchema } = require('../utils/validation');

const router = express.Router();

router.post('/create', validateRequest(createCampaignSchema), campaignController.createCampaign);

router.post('/update', validateRequest(updateCampaignSchema), campaignController.updateCampaign);

router.get('/', campaignController.getCampaigns);
router.get('/pdf', campaignController.pdfExtract);


module.exports = router;


