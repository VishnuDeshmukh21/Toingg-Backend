const Joi = require('joi');

exports.createCampaignSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  // Add other fields as necessary
});

exports.updateCampaignSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().optional(),
  description: Joi.string().optional(),
  // Add other fields as necessary
});

exports.makeCallSchema = Joi.object({
  campaignId: Joi.string().required(),
  // Add other fields as necessary
});