const express = require('express');
const pokemonModel = require('../database/models/pokemon');


const pokedexRouter = express.Router();


pokedexRouter
    .get("/", (req, res) => {
        const payload_id = req.query.payload_id;

        if (payload_id) {
            pokemonModel.readOneById(payload_id)
                .then((payload) => {
                    if (payload) {
                        res.json(payload);
                    } else {
                        res.status(404).json({error: "pokemon not found"});
                    }
                })
                .catch((error) => {
                    res.status(500).json({error: error});
                });
        } else {
            pokemonModel.readAll()
                .then((payloads) => {
                    res.json(payloads);
                })
                .catch((error) => {
                    res.status(500).json({error: error});
                });
        }
    })

module.exports = pokedexRouter;