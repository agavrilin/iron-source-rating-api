const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const domainRouter = require('./domain/router');
const errorHandler = require('./exceptions/error-handler');
const notFoundHandler = require('./exceptions/not-found-error-handler');

const router = express.Router();
const app = express();

domainRouter(router);

app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1', router);

app.use(notFoundHandler);
app.use((err, req, res, next) => errorHandler(err, req, res, next));

module.exports = app;
