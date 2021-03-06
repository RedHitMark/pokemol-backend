/** APP Dependencies **/
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const helmet = require("helmet");
const path = require('path');


/** Create a new Express APP **/
const app = express();


/** Middlewares **/
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({}));
app.use(compression())
app.use(helmet());


/** API Router **/
const apiRouter = require('./api/apiRouter');
app.use('/api', apiRouter);


/** Catch 404 error **/
app.use((req, res, next) => {
  res.status(404).json({message : "not found on this server"});
});


/** Export Express APP **/
module.exports = app;