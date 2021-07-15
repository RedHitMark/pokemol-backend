const express = require('express');
const healthRouter = require('./healthcheckRouter');
const pokedexRouter = require('./pokedexRouter');
const captureRouter = require('./captureRouter');
const dashboardRouter = require('./dashboardRouter');


const apiRouter = express.Router();


/** Healthcheck endpoints **/
apiRouter.use('/healthcheck', healthRouter);

/** Pokedex endpoints **/
apiRouter.use('/pokedex', pokedexRouter);

/** Payload endpoints **/
apiRouter.use('/capture', captureRouter);

/** Devices endpoints **/
apiRouter.use('/dashboard', dashboardRouter);


module.exports = apiRouter;