const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/api', async (req, res) => res.json({}));

module.exports = app;
