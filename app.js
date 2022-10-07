const express = require('express');
const {castErrors, handlerErrors, validationError} = require('./middleware/handler.errors.mw');
const router = require('./router');

const app = express();
app.use(express.json());

app.use('/tasks', router)

app.use(castErrors);
app.use(validationError);
app.use(handlerErrors);

module.exports = app;