const express = require('express');
const teamModel = require('../database/models/team');
const pokemonModel = require('../database/models/pokemon');


const captureRouter = express.Router();


captureRouter
    .get("/", (req, res) => {
        const teamName = req.query.teamName;

        teamModel.readByTeamName(teamName)
            .then(team => {
                if (team) {
                    res.json(team);
                } else {
                    res.status(404).json({error: "team not found"});
                }
            })
            .catch((error) => {
                res.status(500).json({error: error});
            });
    })
    .post("/", (req, res) => {
        const teamName = req.body.teamName;
        const submissionID = req.body.submissionID;
        const qrCode = req.body.qrCode;

        teamModel.readByTeamNameAndSubmissionId(teamName, submissionID)
            .then(team => {
                if (team) {
                    pokemonModel.readOneByMongoId(qrCode)
                        .then(pokemon => {
                            if (pokemon) {
                                if (team.captures.findIndex(value => value.pokemon.pokemonID === pokemon.pokemonID) === -1) {
                                    const score = pokemonModel.evalScore(pokemon)
                                    team.captures.push({
                                        timestamp: new Date().getTime(),
                                        pokemon: pokemon,
                                        score: score
                                    })
                                    team.totalScore += score;
                                    teamModel.update(team._id, team)
                                        .then(() => {
                                            res.status(200).json(
                                                {
                                                    pokemon: pokemon,
                                                    score: score,
                                                    result: "Success"
                                                });
                                        })
                                        .catch((error) => {
                                            res.status(500).json({error: error});
                                        })
                                } else {
                                    res.status(401).json({error: "qrCode already scanned"});
                                }
                            } else {
                                res.status(404).json({error: "qrCode not found"});
                            }
                        })
                        .catch((error) => {
                            res.status(500).json({error: error});
                        });
                } else {
                    res.status(404).json({error: "team not found"});
                }
            })
            .catch((error) => {
                res.status(500).json({error: error});
            });
    });


module.exports = captureRouter;