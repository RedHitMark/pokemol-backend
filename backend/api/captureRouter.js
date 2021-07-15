const express = require('express');


const captureRouter = express.Router();


captureRouter
    .get("/", (req, res) => {
        res.json({
            server : "Server is running fine",
        })
    });


module.exports = captureRouter;