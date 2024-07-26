const express = require('express');
const campaignRoutes = require('./campaignRoutes');
const callRoutes = require('./callRoutes');
const languageRoutes = require('./languageRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

const router = express.Router();

router.use('/campaigns', campaignRoutes);
router.use('/calls', callRoutes);
router.use('/languages', languageRoutes);
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;