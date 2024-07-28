
const Joi = require('joi');

exports.createCampaignSchema = Joi.object({
  title: Joi.string().required(),
  voice: Joi.string().required(), 
  language: Joi.string().required(),
  script: Joi.string().min(200).required(), 
  purpose: Joi.string().optional(), 
  knowledgeBase: Joi.string().optional(), 
  calendar: Joi.string().optional(), 
  firstLine: Joi.string().optional(), 
  tone: Joi.string().optional(), 
  postCallAnalysis: Joi.boolean().required(), 
  postCallAnalysisSchema: Joi.object().optional().when('postCallAnalysis', {
    is: true,
    then: Joi.required() 
  })
});


exports.updateCampaignSchema = Joi.object({
  id: Joi.string().required(),
  title: Joi.string().optional(), 
  voice: Joi.string().valid('robot', 'jenny', 'junior', 'nabarupa', 'alloy', 'echo', 'fable', 'onyx', 'nova', 'shimmer', 'jessica', 'anna', 'lisa', 'johwaan', 'david', 'monika', 'swara', 'varun', 'amrit', 'amari', 'louis', 'charlotte', 'alexandre', 'priya_hindi', 'alisha_hindi', 'bobby').optional(), 
  language: Joi.string().valid('english', 'hindi').optional(), 
  script: Joi.string().min(200).optional(), 
  purpose: Joi.string().optional(), 
  knowledgeBase: Joi.string().optional(), 
  calendar: Joi.string().optional(), 
  firstLine: Joi.string().optional(), 
  tone: Joi.string().optional(), 
  postCallAnalysis: Joi.boolean().optional(),
  postCallAnalysisSchema: Joi.object().optional().when('postCallAnalysis', { is: true, then: Joi.required() }) 
});

exports.makeCallSchema = Joi.object({
  name: Joi.string().required(),
  phoneNumber: Joi.string().pattern(/^[0-9]{10,15}$/).required(), 
  campID: Joi.string().required() 
});
