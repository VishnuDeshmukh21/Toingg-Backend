require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/index');
const errorHandler = require('./utils/errorHandler');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerSpec = YAML.load('swagger.yaml');

const app = express();  

app.use(cors());
app.use(bodyParser.json());

app.use('/api', routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorHandler);

app.use((req, res) => {
  res.status(404).send('Not Found');
});

module.exports = app;
