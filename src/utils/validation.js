
const Joi = require('joi');

exports.createCampaignSchema = Joi.object({
  title: Joi.string().required(),
  voice: Joi.string().required(), 
  language: Joi.string().required(),
  script: Joi.string().min(200).required(), 
  purpose: Joi.string().allow('').optional(), // Allow empty string
  knowledgeBase: Joi.string().allow('').optional(), // Allow empty string
  calendar: Joi.string().allow('').optional(), // Allow empty string
  firstLine: Joi.string().allow('').optional(), // Allow empty string
  tone: Joi.string().allow('').optional(), // Allow empty string
  postCallAnalysis: Joi.boolean().required(), 
  postCallAnalysisSchema: Joi.object().optional().when('postCallAnalysis', {
    is: true,
    then: Joi.required()
  })
});


exports.updateCampaignSchema = Joi.object({
  id: Joi.string().required(),
  title: Joi.string().allow('').optional(), 
  voice: Joi.string().allow('').optional(), 
  language: Joi.string().optional(), 
  script: Joi.string().min(200).optional(), 
  purpose: Joi.string().allow('').optional(), 
  knowledgeBase: Joi.string().allow('').optional(), 
  calendar: Joi.string().allow('').optional(), 
  firstLine: Joi.string().allow('').optional(), 
  tone: Joi.string().allow('').optional(), 
  postCallAnalysis: Joi.boolean().optional(),
  postCallAnalysisSchema: Joi.object().optional().when('postCallAnalysis', { is: true, then: Joi.required() }) 
});

exports.makeCallSchema = Joi.object({
  name: Joi.string().required(),
  phoneNumber: Joi.string().pattern(/^[0-9]{10,15}$/).required(), 
  campID: Joi.string().required() 
});
