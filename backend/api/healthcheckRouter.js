const express = require('express');


const healthcheckRouter = express.Router();


healthcheckRouter
    .get("/", (req, res) => {
        res.json({
            server : "Server is running fine",
        })
    });


module.exports = healthcheckRouter;