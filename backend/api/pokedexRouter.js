const express = require('express');
const pokemonModel = require('../database/models/pokemon');


const pokedexRouter = express.Router();


pokedexRouter
    .get("/", (req, res) => {
        const pokemonID = req.query.pokemonID;

        if (pokemonID) {
            pokemonModel.readOneByPokemonId(pokemonID)
                .then((pokemon) => {
                    if (pokemon) {
                        res.json(pokemon);
                    } else {
                        res.status(404).json({error: "pokemon not found"});
                    }
                })
                .catch((error) => {
                    res.status(500).json({error: error});
                });
        } else {
            pokemonModel.readAll()
                .then((pokemons) => {
                    res.json(pokemons);
                })
                .catch((error) => {
                    res.status(500).json({error: error});
                });
        }
    })

module.exports = pokedexRouter;