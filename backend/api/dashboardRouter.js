const express = require('express');


const dashboardRouter = express.Router();


dashboardRouter
    .get("/", (req, res) => {
        res.json({
            server : "Server is running fine",
        })
    });


module.exports = dashboardRouter;