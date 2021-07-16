const express = require('express');
const teamModel = require('../database/models/team');


const dashboardRouter = express.Router();


dashboardRouter
    .get("/teams", (req, res) => {
        teamModel.readAll()
            .then((teams) => {
                res.json(teams);
            })
            .catch((error) => {
                res.status(500).json({error: error});
            });
    });


module.exports = dashboardRouter;