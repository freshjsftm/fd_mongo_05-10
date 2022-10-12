const express = require('express');
const {castErrors, handlerErrors, validationError} = require('./middleware/handler.errors.mw');
const CommentController = require('./controllers/comment.controller')
const router = require('./router');

const app = express();
app.use(express.json());

app.use('/tasks', router)
app.get('/comments', CommentController.getAllComments)

app.use(castErrors);
app.use(validationError);
app.use(handlerErrors);

module.exports = app;