const pokemonModel = require('../mongo').models.pokemon;

async function readOneById(pokemonId) {
    return pokemonModel.findOne({id: { $eq: pokemonId}}).lean().exec();
}
async function readAll(data) {
    return pokemonModel.find(data).lean().exec();
}

module.exports = {
    readAll,
    readOneById,
};
